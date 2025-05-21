#!/bin/zsh
# Fetches the latest changes from origin and resets the local main branch to match origin/main
git fetch origin && git reset --hard origin/main
echo "Local workspace synchronized with origin/main."