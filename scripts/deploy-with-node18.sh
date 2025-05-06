#!/bin/bash
# Script to deploy to Netlify using Node.js v18
# This script automatically switches to Node.js v18 before deploying

# Exit on error
set -e

# Print commands before executing them
set -x

# Change to the project directory
cd "$(dirname "$0")/.."
PROJECT_DIR=$(pwd)

echo "🚀 Starting deployment process with Node.js v18..."

# Check if Node.js v18 is available via NVM
NODE18_PATH=""
if [ -d "$HOME/.nvm/versions/node" ]; then
  # Find the latest v18 version
  for dir in $HOME/.nvm/versions/node/v18*; do
    if [ -d "$dir" ]; then
      NODE18_PATH="$dir/bin"
      echo "✅ Found Node.js v18 at: $NODE18_PATH"
      break
    fi
  done
fi

# If Node.js v18 wasn't found, try to find it in other common locations
if [ -z "$NODE18_PATH" ]; then
  echo "⚠️ Node.js v18 not found in NVM. Checking other locations..."
  
  # Try to find node in common locations
  NODE_LOCATIONS=(
    "/usr/local/bin/node"
    "/usr/bin/node"
    "$HOME/.nodenv/shims/node"
    "$HOME/.npm-global/bin/node"
  )

  for location in "${NODE_LOCATIONS[@]}"; do
    if [ -f "$location" ]; then
      NODE_VERSION=$($location -v)
      if [[ $NODE_VERSION == v18* ]]; then
        NODE18_PATH=$(dirname "$location")
        echo "✅ Found Node.js v18 at: $NODE18_PATH"
        break
      fi
    fi
  done
fi

# If Node.js v18 still wasn't found, exit with error
if [ -z "$NODE18_PATH" ]; then
  echo "❌ Error: Node.js v18 not found. Please install Node.js v18 before deploying."
  exit 1
fi

# Add Node.js v18 to the PATH
export PATH="$NODE18_PATH:$PATH"

# Verify Node.js version
NODE_VERSION=$(node -v)
echo "📌 Using Node.js version: $NODE_VERSION"

if [[ $NODE_VERSION != v18* ]]; then
  echo "❌ Error: Failed to switch to Node.js v18. Current version: $NODE_VERSION"
  exit 1
fi

# Run the deployment check
echo "🔍 Running deployment check..."
npm run netlify:check

# Ask if user wants to continue with deployment
read -p "Continue with deployment? (y/n): " CONTINUE
if [[ $CONTINUE != "y" && $CONTINUE != "Y" ]]; then
  echo "Deployment cancelled."
  exit 0
fi

# Deploy to Netlify
echo "🚀 Deploying to Netlify..."
npm run netlify:deploy

echo "✅ Deployment process completed!"
