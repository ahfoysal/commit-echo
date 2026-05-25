---
name: create-issue
description: Use this skill when asked to create a GitHub issue. Provides a structured workflow for gathering issue details and creating issues via the gh CLI.
---

# Create Issue

Use this skill when the user asks to create a GitHub issue.

## Workflow

1. If not already provided, diagnose the codebase to infer a sensible title, body (description), labels, and issue type (Bug, Feature, Task). Propose the generated values to the user
2. Confirm the details before creating
3. Run `gh issue list --search "<title>" --state open --limit 5` and review matching issues. If potential duplicates are found, display them (title, URL, state) and ask the user whether to proceed or cancel
4. If no duplicates (or user chooses to proceed), use `gh issue create` with the gathered information and return the issue URL

## Commands

```bash
# Search for existing issues matching the title
gh issue list --search "<title>" --state open --limit 5 --json title,url,state

# Create the issue (only after duplicate check passes)
gh issue create --title "<title>" --body "<body>" --label "<labels>" --type "<issue_type>"
```

## Notes

- If no repo is specified, assume the current one
- Labels should be comma-separated if multiple
- Return the issue URL after creation
- Always search for duplicates before creating; never skip the duplicate check
