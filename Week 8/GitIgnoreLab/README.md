# Git Ignore Lab — Week 8

This lab demonstrates how to ignore unwanted files and folders using Git.

## Objectives
- Explain `.gitignore`
- Ignore `.log` files and `log/` directories
- Verify with `git status`

## Setup
1. Create a Git repository:
   ```bash
   cd "Week 8/GitIgnoreLab"
   git init
   ```
2. Create sample files:
   ```bash
   echo "This is a log file" > test.log
   mkdir log
   echo "log folder content" > log/sample.txt
   ```
3. Add `.gitignore` content:
   ```text
   *.log
   log/
   ```
4. Verify `git status`:
   ```bash
   git status --short
   ```
   The `.log` file and `log/` folder should not appear as untracked files.

## Notes
- `.gitignore` tells Git which files and folders to ignore.
- Ignored files must not already be tracked by Git. If they are, remove them from the index with `git rm --cached`.
