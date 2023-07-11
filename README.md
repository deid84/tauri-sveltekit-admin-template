# Tauri SvelteKit Admin Template

This repository contains a starter template for building Tauri apps using SvelteKit with Tailwind CSS.

## How to use this template

To use this template, run the following command:

```
npx degit deid84/tauri-sveltekit-admin-template <target-directory>

```

This will clone the template repository and copy the project to a new directory called `<target-directory>`.

## Prerequisites

Before you can use this template, you will need to install the following dependencies:

-   [Node.js](https://nodejs.org/)
-   [Rust & OS Dev Tools](https://tauri.app/v1/guides/getting-started/prerequisites)

All the other dependencies are already in `package.json` so they will be automatically installed during next step.

## Getting started

1.  Change into the `target-directory`:

```
cd <target-directory>

```

2.  Install the dependencies:

```
npm install

```

3.  Start the development server:

```
npm run tauri dev

```

or start dev server for browser

```
npm run dev

```

This will start the development server and open a new window. The app will automatically reload whenever you make changes to the source code.

## Building for production

To build the app for production, run the following command:

```
npm run build

```

This will create a production build of the app in the `build` directory.

## Further reading

-   [Tauri guides](https://tauri.app/v1/guides/)
-   [Tauri documentation - Quick Start with SvelteKit](https://tauri.app/v1/guides/getting-started/setup/sveltekit)
-   [Svelte documentation](https://svelte.dev/docs)
-   [SvelteKit documentation](https://kit.svelte.dev)
