# Contributing

Thank you for your interest in contributing to the Express TypeScript Template!

Contributions, suggestions, bug reports, and improvements are welcome.

## Getting Started

1. Fork the repository.
2. Clone your fork.
3. Create a new branch for your changes.
4. Install the dependencies.
5. Make your changes.
6. Test your changes.
7. Commit your changes.
8. Push your branch.
9. Open a pull request.

Example:

```bash
git clone https://github.com/Drey22230/express-templates.git
cd express-templates
npm install
```

Create a branch:

```bash
git checkout -b feature/your-feature
```

## Project Structure

This project uses a feature-based architecture.

New application features should generally be placed inside:

```text
src/modules/
```

For example:

```text
src/modules/products/
├── product.controller.ts
├── product.service.ts
├── product.routes.ts
├── product.schema.ts
└── product.types.ts
```

Keep business logic inside services and HTTP-specific logic inside controllers.

## Development

Run the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Run the production build:

```bash
npm run start
```

## Making Changes

When contributing, please try to:

* Follow the existing project structure.
* Keep changes focused and relevant.
* Use clear and descriptive names.
* Avoid unnecessary changes to unrelated files.
* Keep business logic inside services.
* Keep controllers focused on HTTP-related responsibilities.
* Add or update documentation when necessary.
* Make sure the project builds successfully before submitting a pull request.

## Commit Messages

Use clear commit messages that describe the change.

Examples:

```text
feat: add product module
fix: handle missing environment variable
docs: update installation instructions
refactor: simplify error middleware
```

## Pull Requests

Before opening a pull request, make sure:

* The project builds successfully.
* Existing functionality is not unnecessarily broken.
* The code follows the existing architecture.
* Documentation is updated when needed.
* The pull request clearly explains what was changed.

Please keep pull requests focused on a single feature, fix, or improvement whenever possible.

## Issues

When reporting a bug, include:

* A clear description of the problem.
* Steps to reproduce it.
* Expected behavior.
* Actual behavior.
* Relevant error messages or logs.

For feature requests, explain the proposed feature and why it would be useful for the template.

## Code of Conduct

By participating in this project, you agree to follow the project's [Code of Conduct](CODE_OF_CONDUCT.md).

Thank you for contributing!
