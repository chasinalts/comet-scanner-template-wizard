#!/bin/bash

# Netlify MCP Server Quick Setup Script
# This script helps you get started with the Netlify MCP server

set -e

echo "🚀 Netlify MCP Server Quick Setup"
echo "==================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ and try again."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm and try again."
    exit 1
fi

echo "✅ npm version: $(npm --version)"

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo "⚠️  Netlify CLI is not installed. Installing globally..."
    npm install -g netlify-cli
    echo "✅ Netlify CLI installed"
else
    echo "✅ Netlify CLI version: $(netlify --version)"
fi

# Check if MCP SDK is installed
if [ ! -d "node_modules/@modelcontextprotocol" ]; then
    echo "📦 Installing MCP SDK..."
    npm install @modelcontextprotocol/sdk --save-dev
    echo "✅ MCP SDK installed"
else
    echo "✅ MCP SDK already installed"
fi

# Create environment file if it doesn't exist
if [ ! -f ".env.mcp" ]; then
    echo "📝 Creating environment file..."
    cp .env.mcp.example .env.mcp
    echo "✅ Created .env.mcp from template"
    echo "⚠️  Please edit .env.mcp and add your Netlify Personal Access Token"
else
    echo "✅ Environment file already exists"
fi

# Test the MCP server
echo ""
echo "🧪 Testing MCP server..."
if npm run mcp:test; then
    echo "✅ MCP server test completed"
else
    echo "⚠️  MCP server test had issues (this might be expected without authentication)"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "📋 Next steps:"
echo "   1. Edit .env.mcp and add your Netlify Personal Access Token"
echo "      Get it from: https://app.netlify.com/user/applications#personal-access-tokens"
echo "   2. Configure your MCP client (see NETLIFY_MCP_SETUP.md)"
echo "   3. Start using the server with your AI assistant!"
echo ""
echo "📖 For detailed setup instructions, see: NETLIFY_MCP_SETUP.md"
echo "🧪 To test the server: npm run mcp:test"
echo "🚀 To start the server manually: npm run mcp:start"
echo ""