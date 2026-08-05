# Branching and Merging Lab — Week 8

This lab explains Git branching and merging and describes the GitLab branch/merge request workflow.

## Objectives
- Explain branching and merging
- Explain creating a branch request in GitLab
- Explain creating a merge request in GitLab
- Create a branch, make changes, and merge it into `master`

## Branching
1. Create a new branch:
   ```bash
   git checkout -b GitNewBranch
   ```
2. List local and remote branches:
   ```bash
   git branch -a
   ```
3. Switch to the branch (already on it after creation):
   ```bash
   git checkout GitNewBranch
   ```
4. Add files and changes in the branch.
5. Commit the changes:
   ```bash
   git add .
   git commit -m "Add changes on GitNewBranch"
   ```
6. Check status:
   ```bash
   git status
   ```

## Merging
1. Switch to `master`:
   ```bash
   git checkout master
   ```
2. Compare differences between `master` and branch:
   ```bash
   git diff master..GitNewBranch
   ```
3. Show visual diff with P4Merge (if installed):
   ```bash
   git difftool master..GitNewBranch
   ```
4. Merge branch into `master`:
   ```bash
   git merge GitNewBranch
   ```
5. View merge history:
   ```bash
   git log --oneline --graph --decorate
   ```
6. Delete the branch after merge:
   ```bash
   git branch -d GitNewBranch
   ```

## GitLab Branch/Merge Request
- In GitLab, create a new branch from the repository page.
- Edit files and push the branch.
- Create a merge request from the branch into `master`.
- Review and merge the request in GitLab.

## Example file
A sample file has been added to show branch changes.
