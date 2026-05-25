---
name: create-pr
description: Use this skill when asked to create a GitHub pull request. Provides a structured workflow for gathering PR details, building a description, and creating the PR via the gh CLI.
---

# Create Pull Request

Use this skill when the user asks to create a pull request.

## Workflow

1. Determine the source and target branches (default: current branch → default branch)
2. Gather PR title, body, and labels from the user
3. Run `git log` between base and head to generate a summary if body is not provided
4. Confirm details with the user
5. Create the PR using `gh pr create`

## Command

```bash
gh pr create --title "<title>" --body "<body>" --base "<base>" --head "<head>"
```

## Notes

- If no base is specified, use the repo's default branch
- If no head is specified, use the current branch
- Optionally pass `--draft` for draft PRs
- Return the PR URL after creation
