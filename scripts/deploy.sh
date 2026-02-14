#!/usr/bin/env bash
set -euo pipefail

# Deploy built output to the production branch
# Usage: ./scripts/deploy.sh

BRANCH=$(git rev-parse --abbrev-ref HEAD)

if [ "$BRANCH" != "main" ]; then
  echo "Error: must be on main branch to deploy"
  exit 1
fi

# Ensure working tree is clean
if [ -n "$(git status --porcelain)" ]; then
  echo "Error: working tree is not clean. Commit or stash changes first."
  exit 1
fi

echo "Building..."
npm run build

# Copy dist to a temp directory
TMPDIR=$(mktemp -d)
cp -r dist/* "$TMPDIR/"

echo "Switching to production branch..."
git checkout production

# Remove existing files (except .git, .gitignore, .cpanel.yml)
find . -maxdepth 1 \
  ! -name '.' \
  ! -name '..' \
  ! -name '.git' \
  ! -name '.gitignore' \
  ! -name '.cpanel.yml' \
  -exec rm -rf {} +

# Copy new build
cp -r "$TMPDIR"/* .
rm -rf "$TMPDIR"

# Commit
git add -A
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
git commit -m "Deploy: $TIMESTAMP"

echo "Switching back to main..."
git checkout main

echo "Pushing production branch to origin..."
git push origin production

echo ""
echo "Done! Production branch pushed to origin."
echo "cPanel will auto-deploy if configured, or go to:"
echo "  cPanel > Git Version Control > Manage > Pull or Deploy > Update from Remote"
