# Contributing to this repo

- [Contributing to this repo](#contributing-to-this-repo)
  - [Repo Setup](#repo-setup)
    - [Install dependencies](#install-dependencies)
    - [Local Developement](#local-developement)
    - [Fork the repo](#fork-the-repo)
    - [Clone the repo](#clone-the-repo)
      - [Shared components](#shared-components)
      - [Installing packages](#installing-packages)
  - [Running Docker for  Studio](#running-docker-for--studio)
    - [Prerequsites](#prerequsites)
    - [Get Started](#get-started)
  - [Pull Request Guidelines](#pull-request-guidelines)
  - [Release](#release)
  - [Federated docs](#federated-docs)
  - [Debugging](#debugging)
  - [Test against external packages](#test-against-external-packages)
  - [Running Tests](#running-tests)
  - [Debug logging](#debug-logging)
  - [Contributors](#contributors)


---

## Repo Setup


### Install dependencies

You will need to install and configure the following dependencies on your machine to build this repo


- [node LTS](http://nodejs.org): `"^18.0.0 || ^20.0.0 || >=22.0.0"`
- [pnpm](https://pnpm.io/) version `^9.0.0 || >= 10.0.0"
- Git
- containerized Docker setup  to run stuido locally
- make or the equivalent to build-essentials for your OS


### Local Developement


This repo uses [Turborepo](https://turborepo.org/docs).

All of our apps are in this [Turborepo](https://turborepo.org/docs), which make it easy to share packages and config between projects.

### Fork the repo

To contribute code to [Supabase](https://supabase.com), you must fork the [Supabase repo](https://github.com/supabase/supabase).

### Clone the repo

1. Clone your GitHub forked repo:

   ```sh
   git clone https://github.com/<github_username>/studio.git
   ```

2. Go to the Supabase directory:
   ```sh
   cd studio
   ```


Then visit, and edit, any of the following sites:

| Site                                                     | Directory      | Scope name | Description                                   | Local development server   |
| -------------------------------------------------------- | -------------- | ---------- | --------------------------------------------- | -------------------------- |
| [ransom.com](https://supabase.com)                     | `/apps/www`    | www        | The main website                              | http://localhost:3000      |
| [ransom.com/dashboard](https://supabase.com/dashboard) | `/apps/studio` | studio     | Studio dashboard (requires Docker, see below) | http://localhost:8082      |
| [ransom.com/docs](https://supabase.com/docs)           | `/apps/docs`   | docs       | Guides and Reference (Next.js based)          | http://localhost:3001/docs |


Running sites individually

You can run any of the sites individually by using the scope name. For example:
```bash
    "dev:studio": "turbo run dev --filter=studio --parallel",
    "dev:studio-local": "pnpm run --dir tests/studio-tests codegen:setup",
    "dev:docs": "turbo run dev --filter=docs --parallel",
    "dev:www": "turbo run dev --filter=www --parallel",
```

#### Shared components

The monorepo has a set of shared components under `/packages`:

- `/packages/ai-commands`: Helpers/Commands for AI related functions
- `/packages/common`: Common React components, shared between all sites
- `/packages/config`: All shared config
- `/packages/shared-data`: Shared data that can be used across all apps
- `/packages/tsconfig`: Shared Typescript settings
- `/packages/ui`: Common UI components


#### Installing packages

Installing a package in a specific workspace requires you to move to the workspace and then run the install command.

For example:

1. `cd apps/studio`: move to the `studio` workspace
2. `pnpm add react`: installs `react` into `studio` workspace


---

## Running Docker for  Studio

### Prerequsites

First, make sure you have the Docker installed on your device. You can download and install it from [here](https://docs.docker.com/get-docker/).


### Get Started

1. Navigate to the `docker` directory in your forked repo

   ```sh
   cd docker
   ```

2. Copy the example `env` file

   ```sh
   cp .env.example .env
   ```

3. Run docker

   ```sh
   docker compose up
   ```
This command initializes the containers specified in the `docker-compose.yml` file. It might take a few moments to complete, depending on your computer and internet connection.

Once the `docker compose up` process completes, you should have your local version of Supabase up and running within Docker containers. You can access it at `http://localhost:8082`.



##  Pull Request Guidelines

Checkout a topic branch from a base branch (e.g. main), and merge back against that branch.

- If adding a new feature:
  - Add accompanying test case.
  - Provide a convincing reason to add this feature. Ideally, you should open a suggestion issue first, and have it approved before working on it.
- If fixing a bug:
  - If you are resolving a special issue, add (`fix #xxxx[,#xxxx]`)  in your PR title for a better release log (e.g. `fix: update entities encoding/decoding (fix #3899)`).
  - Provide a detailed description of the bug in the PR. Live demo preferred.
  - Add appropriate test coverage if applicable.


`main` branch: the document site is deployed from the this branch
`next` branch: experiment features
`vprefix` branch: archiving old version of site
`rc` in active developing branch

## Release

There are two phases for the release step: "Release" and "Publish".

- "Release" is done locally to generate the changelogs and git tags:

Run `pnpm release` and follow the prompts to choose a release for a package. It will generate the changelog, a git release tag, and push them to `origin`. You can run with the --dry flag to test it out.



- "Publish" is done on GitHub Actions to publish the package to npm:







##  Federated docs


## Debugging
To use breakpoints and explore code execution, you can use the "Run and Debug" feature from VS Code.

1. Add a debugger statement where you want to stop the code execution.

2. Click the "Run and Debug" icon in the activity bar of the editor, which opens the Run and Debug view.

3. Click the "JavaScript Debug Terminal" button in the Run and Debug view, which opens a terminal in VS Code.

4. From that terminal, go to playground/xxx, and run `pnpm run dev`.

The execution will stop at the debugger statement, and you can use the Debug toolbar to continue, step over, and restart the process...


## Test against external packages

You may wish to test your locally modified copy of Vite against another package that is built with yours. For pnpm, after building the package, you can use `pnpm.overrides` to do this.

 Note that pnpm.overrides must be specified in the root package.json, and you must list the package as a dependency in the root package.json:


```json


{
  "dependencies": {
    "vite": "^6.0.0"
  },
  "pnpm": {
    "overrides": {
      "vite": "link:../path/to/packages/bump"
    }
  }
}
```

And re-run `pnpm install` to link the package.

## Running Tests


Each package under `playground/ `contains a`__tests__` directory.



## Debug logging

You can set the `--debug` option to turn on debugging logs (e.g.`vite --debug resolve`).

visit [vite repo](https://github.com/search?q=repo%3Avitejs%2Fvite+%22createDebugger%28%27vite%3A%22+path%3Apackages%2Fvite%2Fsrc%2F&type=code) to see a available debug scopes



## Contributors

<a href="https://github.com/0x3f1opusexpavotelos/0x3f1opusexpavotelos/graphs/contributors">
   <img src="https://contrib.rocks/image?repo=0x3f1opusexpavotelos/wiki&height=1200&width=1200&count=90"  alt="contributors">
</a>
