#!/bin/bash
# Script to automatically add environment variables from .env to Netlify
# and deploy the application

# Exit on error
set -e

# Change to the project directory
cd "$(dirname "$0")/.."
PROJECT_DIR=$(pwd)

# Set up PATH to include common Node.js locations
export PATH="$PATH:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$HOME/.nvm/versions/node/$(cat $HOME/.nvm/alias/default 2>/dev/null || echo '')/bin:$HOME/.nodenv/shims:$HOME/.npm-global/bin"

# Check if Node.js is available
if ! command -v node &> /dev/null; then
  echo "❌ Error: Node.js not found in PATH. Please make sure Node.js is installed and in your PATH."
  echo "Current PATH: $PATH"
  echo "Trying to find node in common locations..."

  # Try to find node in common locations
  NODE_LOCATIONS=(
    "/usr/local/bin/node"
    "/usr/bin/node"
    "$HOME/.nvm/versions/node/$(cat $HOME/.nvm/alias/default 2>/dev/null || echo '')/bin/node"
    "$HOME/.nodenv/shims/node"
    "$HOME/.npm-global/bin/node"
  )

  for location in "${NODE_LOCATIONS[@]}"; do
    if [ -f "$location" ]; then
      echo "Found node at: $location"
      export PATH="$(dirname "$location"):$PATH"
      break
    fi
  done

  # Check again if node is available
  if ! command -v node &> /dev/null; then
    echo "❌ Error: Could not find Node.js. Please install Node.js and try again."
    exit 1
  fi
fi

echo "✅ Using Node.js: $(node -v)"

# Find the Netlify CLI
NETLIFY_CLI=$(which netlify || echo "")
if [ -z "$NETLIFY_CLI" ]; then
  # Try common locations
  if [ -f "$HOME/.npm-global/bin/netlify" ]; then
    NETLIFY_CLI="$HOME/.npm-global/bin/netlify"
  elif [ -f "/usr/local/bin/netlify" ]; then
    NETLIFY_CLI="/usr/local/bin/netlify"
  elif [ -f "$HOME/.nvm/versions/node/$(nvm current)/bin/netlify" ]; then
    NETLIFY_CLI="$HOME/.nvm/versions/node/$(nvm current)/bin/netlify"
  elif [ -f "$HOME/.nodenv/shims/netlify" ]; then
    NETLIFY_CLI="$HOME/.nodenv/shims/netlify"
  else
    # Try to install it
    echo "⚠️ Netlify CLI not found. Attempting to install it..."
    npm install -g netlify-cli
    NETLIFY_CLI=$(which netlify || echo "")

    if [ -z "$NETLIFY_CLI" ]; then
      echo "❌ Error: Could not find or install Netlify CLI. Please install it manually with 'npm install -g netlify-cli'."
      exit 1
    fi
  fi
fi

echo "🔧 Using Netlify CLI at: $NETLIFY_CLI"

# Check if user is logged in to Netlify
echo "🔑 Checking Netlify authentication..."
if ! "$NETLIFY_CLI" status &>/dev/null; then
  echo "⚠️ You are not logged in to Netlify. Please log in first."

  # Create a temporary script to run the login command
  LOGIN_SCRIPT=$(mktemp)
  cat > "$LOGIN_SCRIPT" << EOL
#!/bin/bash
export PATH="$PATH"
node "$NETLIFY_CLI" login
EOL
  chmod +x "$LOGIN_SCRIPT"

  # Run the login script
  "$LOGIN_SCRIPT"
  rm "$LOGIN_SCRIPT"

  # Check if login was successful
  if ! "$NETLIFY_CLI" status &>/dev/null; then
    echo "❌ Failed to log in to Netlify. Please try running 'netlify login' manually."
    exit 1
  fi
fi

# Check if site is linked
echo "🔗 Checking if site is linked..."
if ! "$NETLIFY_CLI" status 2>/dev/null | grep -q "Current site:"; then
  echo "⚠️ Your project is not linked to a Netlify site. Linking now..."

  # Create a temporary script to run the link command
  LINK_SCRIPT=$(mktemp)
  cat > "$LINK_SCRIPT" << EOL
#!/bin/bash
export PATH="$PATH"
node "$NETLIFY_CLI" link
EOL
  chmod +x "$LINK_SCRIPT"

  # Run the link script
  "$LINK_SCRIPT"
  rm "$LINK_SCRIPT"

  # Check if linking was successful
  if ! "$NETLIFY_CLI" status 2>/dev/null | grep -q "Current site:"; then
    echo "❌ Failed to link to a Netlify site. Please try running 'netlify link' manually."
    exit 1
  fi
fi

echo "🔐 Setting up Netlify environment variables from .env file..."

# Check if .env file exists
if [ ! -f .env ]; then
  echo "❌ Error: .env file not found!"
  exit 1
fi

# Source the .env file to load variables
source .env

# Get all VITE_ variables from .env
VITE_VARS=$(grep -o "^VITE_[^=]*" .env)

# Create a temporary script to set environment variables
ENV_SCRIPT=$(mktemp)
cat > "$ENV_SCRIPT" << EOL
#!/bin/bash
export PATH="$PATH"

# Set each variable in Netlify
EOL

for VAR in $VITE_VARS; do
  VALUE="${!VAR}"
  echo "📝 Setting $VAR in Netlify..."
  echo "node \"$NETLIFY_CLI\" env:set \"$VAR\" \"$VALUE\" --force" >> "$ENV_SCRIPT"
done

chmod +x "$ENV_SCRIPT"

# Run the environment script
"$ENV_SCRIPT"
rm "$ENV_SCRIPT"

echo "✅ All environment variables have been set in Netlify!"

# Create a backup of the .env file
cp .env .env.backup

echo "📦 Creating a clean commit for deployment..."

# Create a temporary .env file without sensitive information
cat > .env.example << EOL
# Example .env file - Add your own values
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your-project-id
VITE_APPWRITE_DATABASE_ID=your-database-id
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key
EOL

# Check if netlify.toml exists, create if not
if [ ! -f netlify.toml ]; then
  echo "📝 Creating netlify.toml file..."
  cat > netlify.toml << EOL
[build]
  command = "npm run netlify:clean-build"
  publish = "dist"

[dev]
  command = "npm run dev"
  targetPort = 3000
  port = 8888
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
EOL
fi

# Add and commit the changes
git add netlify.toml .env.example
git commit -m "chore: prepare for Netlify deployment with environment variables"

echo "🚀 Deploying to Netlify..."

# Create a temporary script to run the deploy command
DEPLOY_SCRIPT=$(mktemp)
cat > "$DEPLOY_SCRIPT" << EOL
#!/bin/bash
export PATH="$PATH"
node "$NETLIFY_CLI" deploy --prod
EOL
chmod +x "$DEPLOY_SCRIPT"

# Run the deploy script
"$DEPLOY_SCRIPT"
rm "$DEPLOY_SCRIPT"

# Restore the original .env file
mv .env.backup .env

echo "✨ Deployment complete! Your app is now live on Netlify with secure environment variables."
