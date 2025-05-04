#!/bin/bash

# Script to manually set Node.js version to v18
# This script is intended to be sourced, not executed directly

# Check if nvm is installed
if [ -s "$HOME/.nvm/nvm.sh" ]; then
  echo "Found nvm installation at $HOME/.nvm"
  
  # Source nvm
  source "$HOME/.nvm/nvm.sh"
  
  # Check if Node.js v18 is installed
  if nvm ls | grep -q "v18"; then
    echo "Node.js v18 is installed. Switching to it..."
    nvm use 18
  else
    echo "Node.js v18 is not installed. Installing Node.js v18.20.8..."
    nvm install 18.20.8
    nvm use 18.20.8
  fi
  
  # Verify the current Node.js version
  node_version=$(node -v)
  echo "Current Node.js version: $node_version"
  
  if [[ $node_version == v18* ]]; then
    echo "✅ Successfully switched to Node.js v18"
  else
    echo "❌ Failed to switch to Node.js v18"
  fi
else
  echo "nvm not found. Please install nvm and Node.js v18 manually:"
  echo "1. Install nvm: https://github.com/nvm-sh/nvm#installing-and-updating"
  echo "2. Install Node.js v18: nvm install 18"
  echo "3. Use Node.js v18: nvm use 18"
fi

# Instructions for use
echo ""
echo "To use this script, run:"
echo "source scripts/use-node18.sh"
echo ""
echo "Note: This script must be sourced, not executed directly,"
echo "because it needs to modify your current shell environment."
