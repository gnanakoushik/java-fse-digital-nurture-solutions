#!/bin/bash
# Git Hands-On Exercises 1 through 5 Script

echo "--- Git Hands-On 1: Repository Initialization & Config ---"
git config user.name "Student Developer"
git config user.email "student@example.com"

echo "--- Git Hands-On 2: Staging & Committing ---"
git status
git add .
git commit -m "Git Hands-On: Executing staging and tracking workflows"

echo "--- Git Hands-On 3: Branching & Merging ---"
git checkout -b feature/login-page
echo "// Login feature under development" > login.js
git add login.js
git commit -m "Added login feature draft"
git checkout master
git merge feature/login-page

echo "--- Git Hands-On 4: Inspecting History & Logs ---"
git log --oneline -n 5

echo "--- Git Hands-On 5: Remote Operations ---"
git push origin master