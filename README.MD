# Express TypeScript Template

A clean and scalable **Express.js + TypeScript** starter template using a modular, feature-based architecture.

The goal of this template is to avoid repetitive setup when creating a new Express API.

## Features

* Express.js
* TypeScript
* Node.js
* `tsx` for development
* Environment variables with `dotenv`
* Feature/module-based architecture
* Centralized error handling
* Clean separation between application and server setup

## Project Structure

```text
src/
├── app.ts
├── server.ts
│
├── config/
│   ├── env.ts
│   └── database.ts
│
├── modules/
│   ├── users/
│   │   ├── user.controller.ts
│   │   ├── user.service.ts
│   │   ├── user.routes.ts
│   │   ├── user.schema.ts
│   │   └── user.types.ts
│   │
│   └── auth/
│       ├── auth.controller.ts
│       ├── auth.service.ts
│       ├── auth.routes.ts
│       ├── auth.schema.ts
│       └── auth.types.ts
│
├── middlewares/
│   └── error.middleware.ts
│
└── utils/
```

## Architecture

This project follows a **feature-based/module-based architecture**.

Instead of putting all controllers, services, and routes into separate global folders, each feature owns its related files.

For example:

```text
modules/
└── users/
    ├── user.controller.ts
    ├── user.service.ts
    ├── user.routes.ts
    ├── user.schema.ts
    └── user.types.ts
```

This makes the project easier to maintain as the application grows.

## Responsibilities

### `app.ts`

Responsible for configuring the Express application.

```text
app.ts
├── express configuration
├── global middleware
├── routes
└── error middleware
```

### `server.ts`

Responsible only for starting the HTTP server.

```text
server.ts
└── app.listen(...)
```

Keeping `app.ts` and `server.ts` separate also makes the application easier to test.

### `config/`

Contains application configuration such as:

* Environment variables
* Database configuration
* Third-party service configuration

### `modules/`

Contains application features.

Each module should contain everything related to that feature.

Example:

```text
modules/users/
├── user.controller.ts
├── user.service.ts
├── user.routes.ts
├── user.schema.ts
└── user.types.ts
```

### `middlewares/`

Contains reusable Express middleware.

Example:

```text
middlewares/
├── error.middleware.ts
└── auth.middleware.ts
```

Add middleware here only when it is shared across multiple modules.

### `utils/`

Contains small reusable utilities that don't belong to a specific feature.

Examples:

```text
utils/
├── api-error.ts
├── async-handler.ts
└── response.ts
```

## Installation

Clone the repository:

```bash
git clone https://github.com/Drey22230/express-templates.git
cd express-templates
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file:

```env
PORT=5000
```

For security, do not commit `.env` to Git.

Use `.env.example` as a reference:

```env
PORT=5000
```

## Development

Start the development server:

```bash
npm run dev
```

The server will run on:

```text
http://localhost:5000
```

## Build

Compile TypeScript:

```bash
npm run build
```

The compiled files will be generated inside:

```text
dist/
```

## Production

After building the project:

```bash
npm run start
```

## Scripts

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start development server with hot reload |
| `npm run build` | Compile TypeScript                       |
| `npm run start` | Start compiled application               |

## Creating a New Module

When adding a new feature, create a new folder inside `src/modules`.

Example:

```text
src/modules/products/
├── product.controller.ts
├── product.service.ts
├── product.routes.ts
├── product.schema.ts
└── product.types.ts
```

Then register the module's routes inside `app.ts`.

Example:

```ts
import productRoutes from "./modules/products/product.routes.js";

app.use("/api/products", productRoutes);
```

## Error Handling

Errors are handled centrally through:

```text
src/middlewares/error.middleware.ts
```

The error middleware should be registered **after all routes**:

```ts
app.use("/api/users", userRoutes);

app.use(errorMiddleware);
```

This allows errors from controllers and services to be handled consistently.

## Design Principles

This template follows a few simple principles:

1. **Keep `app.ts` focused on application configuration.**
2. **Keep `server.ts` focused on starting the server.**
3. **Keep business logic inside services.**
4. **Keep HTTP-specific logic inside controllers.**
5. **Keep routes responsible for defining endpoints.**
6. **Group related code by feature/module.**
7. **Keep shared middleware and utilities outside modules.**

## Roadmap

Possible additions for future versions:

* [ ] ESLint
* [ ] Prettier
* [ ] Request validation
* [ ] Custom API error class
* [ ] Async error handler
* [ ] Authentication
* [ ] Database integration
* [ ] Testing
* [ ] Docker
* [ ] API documentation
* [ ] CLI project generator

## License

MIT

# Express TypeScript Template

A clean and scalable Express.js + TypeScript starter template using a modular, feature-based architecture.

## Credits

Created by **Andrie Cenon C. Austria**.

Built with:

* Express.js
* TypeScript
* Node.js

## License

MIT
