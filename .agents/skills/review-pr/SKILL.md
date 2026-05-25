---
name: review-pr
description: Use this skill when asked to review a GitHub pull request. Fetches the PR diff and files, analyzes changes, and provides structured feedback.
---

# Review Pull Request

Use this skill when the user asks to review a pull request.

## Workflow

1. Identify the PR number or branch
2. Fetch the PR diff: `gh pr view <number> --json body,files,additions,deletions` or `gh pr diff <number>`
3. For each changed file, examine the diff
4. Provide structured feedback covering:
   - **Overview**: What the PR does
   - **Code quality**: Readability, maintainability, adherence to project conventions
   - **Potential issues**: Bugs, edge cases, security concerns
   - **Suggestions**: Specific, actionable improvements
5. Summarize with a verdict (approve / changes requested / comment)

## Notes

- Be constructive and specific in feedback
- Review against the project's coding style and conventions found in AGENTS.md and source files
