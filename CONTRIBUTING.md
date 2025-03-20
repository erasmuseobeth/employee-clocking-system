# Contributing Guide

Thank you for your interest in contributing to this project! Follow the steps below to get started.

## Branching Strategy
This repository follows a structured branching strategy:
- `main` - The production-ready branch.
- `dev` - The main development branch.
- `frontend` - Dedicated branch for frontend-related changes.
- `backend` - Dedicated branch for backend-related changes.
- `playground` - A branch for testing and experimentation.

## Prerequisites
Before contributing, ensure you have the following installed:
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/) and a package manager (npm, yarn, pnpm, or bun)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Vercel CLI](https://vercel.com/docs/cli)

## Setting Up GitHub for the First Time
If this is your first time using GitHub, follow these steps:
1. **Create a GitHub account**: Sign up at [GitHub](https://github.com/).
2. **Install Git**: Follow the installation guide [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
3. **Configure Git**: Run the following commands to set up your Git identity:
   ```sh
   git config --global user.name "Your Name"
   git config --global user.email "your-email@example.com"
   ```
4. **Set up SSH keys (optional but recommended)**:
   - Generate an SSH key: `ssh-keygen -t rsa -b 4096 -C "your-email@example.com"`
   - Add the key to GitHub: Follow the [GitHub guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).

## Accessing and Working with Repository Branches
To ensure all team members can access and contribute to the repository, follow these steps:

### **1. Ensure Repo Access**
- The repository owner must add team members as collaborators:
  - Go to **GitHub Repository → Settings → Manage Access**.
  - Add each team member and grant **Write** access.
  - Team members must **accept the invite** to contribute.

### **2. Switching to Existing Branches**
Once you have access, you can pull the repo and switch branches:
```sh
git clone https://github.com/your-repo-name.git
cd your-repo-name
git fetch --all
git checkout branch-name  # e.g., dev, frontend, backend
```

### **3. Making Changes & Committing**
```sh
git add .
git commit -m "Your commit message"
git push origin branch-name
```

### **4. Troubleshooting Access Issues**
- Ensure you have **accepted the repository invite**.
- Check your role in the repo (you need **Write** access).
- If you cannot push changes, verify if branch protection rules are enabled under **Settings → Branches**.

## Standard Commit Message Style
To maintain consistency, follow this commit message format:

```
<type>(<scope>): <subject>

<body>

<footer>
```
### **Commit Types:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation updates
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code restructuring without changing functionality
- `test`: Adding or updating tests
- `chore`: Maintenance changes (e.g., dependency updates)
- `chore`: Maintenance changes (e.g., dependency updates)
- `chore`: Maintenance changes (e.g., dependency updates)
- `chore`: Maintenance changes (e.g., dependency updates)



### **Example Commit Messages:**
```sh
git commit -m "feat(auth): add login functionality"
git commit -m "fix(ui): resolve navbar overlap issue"
git commit -m "docs(readme): update setup instructions"

feat → Adds a new feature
git commit -m "feat: add user authentication"

fix → Fixes a bug
git commit -m "fix: resolve login issue"

chore → Updates dependencies or config files (not production code)
git commit -m "chore: update eslint config"

docs → Updates documentation
git commit -m "docs: update README with setup instructions"

style → Code style changes (formatting, indentation, etc.)
git commit -m "style: format code with Prettier"

refactor → Code restructuring without changing behavior
git commit -m "refactor: optimize database queries"

perf → Improves performance
git commit -m "perf: reduce API response time"

test → Adds or updates tests
git commit -m "test: add unit tests for auth module"

ci → Changes related to CI/CD (GitHub Actions, Travis, etc.)
git commit -m "ci: update GitHub Actions workflow"

build → Changes affecting the build system or external dependencies
git commit -m "build: upgrade Webpack to v5"

revert → Reverts a previous commit
git commit -m "revert: undo previous commit"
```

## Installing Dependencies
Run the following command based on your package manager:
```sh
npm install  # or yarn install, pnpm install, bun install
```

## Running the Project Locally
Start the development server:
```sh
npm run dev  # or yarn dev, pnpm dev, bun dev
```
Visit [http://localhost:3000](http://localhost:3000) to see the application.

## Creating a Feature Branch
Before making changes, create a new branch:
```sh
git checkout -b feature-branch-name
```

## Making Changes & Committing
1. Make your changes and test them locally.
2. Add your changes:
   ```sh
   git add .
   ```
3. Commit with a meaningful message:
   ```sh
   git commit -m "Add feature description"
   ```

## Pushing Changes & Creating a Pull Request
1. Push your branch to GitHub:
   ```sh
   git push origin feature-branch-name
   ```
2. Go to the repository on GitHub and create a **Pull Request (PR)** to the `dev` branch.
3. Add a clear description of your changes and request a review.

## Code Reviews & Merging
- Your PR will be reviewed and feedback may be provided.
- Once approved, it will be merged into the `dev` branch.
- After thorough testing, changes will be merged into `main` for production.

## Best Practices
- Keep PRs small and focused.
- Follow coding standards and best practices.
- Write meaningful commit messages.
- Test your code before pushing.

Happy coding! 🚀

