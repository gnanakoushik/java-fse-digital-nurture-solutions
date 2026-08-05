# Git Conflict Resolution Lab — Week 8

This lab demonstrates how to resolve merge conflicts using Git and a merge tool like P4Merge.

## Objectives
- Explain how to resolve conflicts during merge
- Implement conflict resolution when branch and master both modify the same file

## Steps
1. Verify `master` is clean:
   ```bash
   git checkout master
   git status
   ```
2. Create branch `GitWork` and switch to it:
   ```bash
   git checkout -b GitWork
   ```
3. Create `hello.xml` in the branch with content:
   ```xml
   <message>Hello from GitWork branch</message>
   ```
4. Check status and commit:
   ```bash
   git status
   git add hello.xml
   git commit -m "Add hello.xml on GitWork branch"
   ```
5. Switch back to `master`:
   ```bash
   git checkout master
   ```
6. Create `hello.xml` on `master` with different content:
   ```xml
   <message>Hello from master branch</message>
   ```
7. Commit the master change:
   ```bash
   git add hello.xml
   git commit -m "Add hello.xml on master"
   ```
8. Inspect history:
   ```bash
   git log --oneline --graph --decorate --all
   ```
9. Compare branch differences:
   ```bash
   git diff master..GitWork
   ```
10. Use visual diff with P4Merge:
    ```bash
    git difftool master..GitWork
    ```
11. Merge branch into master:
    ```bash
    git merge GitWork
    ```
12. Observe conflict markers in `hello.xml`.
13. Resolve the conflict with a 3-way merge tool:
    ```bash
    git mergetool
    ```
14. After resolving, commit the merge:
    ```bash
    git add hello.xml
    git commit -m "Resolve merge conflict in hello.xml"
    ```
15. Add backup files to `.gitignore` if created by the merge tool:
    ```text
    *.orig
    *.backup
    ```
16. Commit the `.gitignore` change:
    ```bash
    git add .gitignore
    git commit -m "Ignore merge backup files"
    ```
17. List branches:
    ```bash
    git branch -a
    ```
18. Delete merged branch:
    ```bash
    git branch -d GitWork
    ```
19. View final history:
    ```bash
    git log --oneline --graph --decorate
    ```

## Notes
- Conflict markers look like:
  ```text
  <<<<<<< HEAD
  content from master
  =======
  content from branch
  >>>>>>> GitWork
  ```
- Use `git mergetool` to launch your configured merge tool.
- If `.gitignore` already exists, append the new ignore rules.
