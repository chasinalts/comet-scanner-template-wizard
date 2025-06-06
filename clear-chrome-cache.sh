#!/bin/bash

# Script to clear Chrome browsing history and cache
# This prevents cached 404 pages from interfering with testing new deployments

echo "Clearing Chrome browsing history and cache..."

# Kill Chrome processes to ensure clean state
pkill -f "Google Chrome" 2>/dev/null || true

# Wait for processes to fully terminate
sleep 2

# Clear Chrome user data (history, cache, etc.)
# This removes all browsing data for a fresh start
rm -rf ~/Library/Application\ Support/Google/Chrome/Default/History* 2>/dev/null || true
rm -rf ~/Library/Application\ Support/Google/Chrome/Default/Cache* 2>/dev/null || true
rm -rf ~/Library/Caches/Google/Chrome* 2>/dev/null || true

echo "Chrome cache and history cleared successfully!"
echo "You can now test the deployment with a clean browser state."