# Git Cleanup and Push Lab — Week 8

This lab explains how to clean up a local repository and push changes back to remote Git.

## Objectives
- Explain how to clean up and push back to remote Git
- Execute cleanup and push tasks for a local branch or repository

## Steps
1. Verify `master` is clean:
   ```bash
   git checkout master
   git status
   ```
2. List all branches:
   ```bash
   git branch -a
   ```
3. Pull the latest remote changes into `master`:
   ```bash
   git pull origin master
   ```
4. Push your pending changes from `Git-T03-HOL_002` branch to remote:
   ```bash
   git checkout Git-T03-HOL_002
   git status
   git add .
   git commit -m "Complete Git-T03-HOL_002 cleanup and push"
   git push origin Git-T03-HOL_002
   ```
5. Verify remote changes:
   - Check your GitLab or GitHub repository page for the new commit
   - Or use:
     ```bash
     git fetch origin
     git log origin/Git-T03-HOL_002 --oneline -1
     ```

## Notes
- If your branch already exists remotely, use `git push origin Git-T03-HOL_002`.
- If the remote branch does not exist, the same command will create it.
- If master is behind remote, `git pull origin master` keeps it up to date.
