# GitDemo Lab — Week 8

This lab demonstrates Git setup, configuration, default editor integration, and adding files to a repository.

## Objectives
- Configure Git user name and email
- Set Notepad++ as the default Git editor
- Initialize a repository
- Add a file and commit it
- Push to a remote repository

## Steps
1. Open Git Bash and verify Git:
   ```bash
   git --version
   ```
2. Configure Git user name and email:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```
3. Verify configuration:
   ```bash
   git config --global --list
   ```
4. Set Notepad++ as default editor (Windows path example):
   ```bash
   git config --global core.editor "\"C:/Program Files/Notepad++/notepad++.exe\" -multiInst -nosession"
   ```
5. Initialize a new repo:
   ```bash
   mkdir GitDemo
   cd GitDemo
   git init
   ```
6. Create a file and add content:
   ```bash
   echo "Welcome to GitDemo" > welcome.txt
   git status
   git add welcome.txt
   git commit -m "Add welcome.txt"
   ```
7. Add remote and push:
   ```bash
   git remote add origin <remote-url>
   git push -u origin master
   ```

## Notes
- Use GitHub or GitLab for your remote repository.
- Do not use corporate credentials if instructed otherwise.
