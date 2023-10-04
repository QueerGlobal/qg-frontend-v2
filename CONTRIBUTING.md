## Developer Git Workflow:

- 📌 Clone down the organization's repo as your `origin`
- 📌 Pick up a "ticket" from our [GitHub KanBan Board](https://github.com/orgs/QueerGlobal/projects/1/views/2) `Todo` lane
  - 🐱‍🏍 Move the "ticket" into the `In Progress` lane
  - 🏂 Click the title of the "ticket" and in the top right section make yourself an "Assignee"
  - 💃 Click the title again for that ticket's _full_ view on GitHub
  - 🏃‍♀️ Click "create a branch" directly on the right side under "development"
  - 🏄‍♀️ Fetch from `origin main` in your IDE and checkout your new feature-branch which should share the same name as the issuing ticket
- 📌 Use [Semantic Commit-Messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) for feature development
- 📌 Push your feature-branch to the trunk remote `git push origin feature-branch`
- 📌 PR to `main` branch for Code Review
  - 🦹‍♀️ Move the "ticket" into the `In Review` lane
  - 🕵️‍♂️ A member (non-author) of the team will review it soon
  - 👨‍🚀 End to End testing will occur in during review
- 🎇 Merge your (the author's) _approved_ PR branch to Staging or revise and repeat

## Finding Work without Tickets

- 📌 Please view our [Project Status](https://github.com/QueerGlobal/qg-frontend-v2#project-status) Header in the README for site content that is incomplete.

## Creating an Issue

- 📌 Visit the [GitHub Issues](https://github.com/QueerGlobal/qg-frontend-v2/issues) for our repo
- 📌 Click "New Issue"
- 🐛 For `Bug Reports` please select the appropriate Bug Report Issue Template
  - 🐱‍👓 Follow the instructions when filling out the issue.
  - 🐱‍🚀 Assign yourself to the issue and create a branch under the same name following the '🏃‍♀️ Click "create a branch"' steps in the above Developer Workflow...
- 📌 For non-bug related Issues (solution proposal, project development, etc) use a blank issue
  - 🐱‍🐉 Fill out to the best of your abilities.
