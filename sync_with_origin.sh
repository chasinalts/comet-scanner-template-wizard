#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}=== Syncing with origin repository ===${NC}"

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo -e "${RED}Error: Git is not installed. Please install Git first.${NC}"
    exit 1
fi

# Check if .git directory exists
if [ ! -d ".git" ]; then
    echo -e "${RED}Error: This directory is not a git repository.${NC}"
    exit 1
fi

# Fetch latest changes from origin
echo -e "${YELLOW}Fetching latest changes...${NC}"
git fetch origin
if [ $? -ne 0 ]; then
    echo -e "${RED}Error: Failed to fetch from origin.${NC}"
    exit 1
fi

# Get current branch
current_branch=$(git branch --show-current)
if [ -z "$current_branch" ]; then
    echo -e "${RED}Error: Unable to determine current branch.${NC}"
    exit 1
fi

# Pull latest changes
echo -e "${YELLOW}Pulling latest changes from origin/$current_branch...${NC}"
git pull origin $current_branch
if [ $? -ne 0 ]; then
    echo -e "${RED}Error: Failed to pull from origin/$current_branch.${NC}"
    exit 1
fi

echo -e "${GREEN}Successfully synced with origin/$current_branch${NC}"