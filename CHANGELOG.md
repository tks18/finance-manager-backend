# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### 0.0.1-0 (2022-09-23)


### CI 🛠

* **husky:** add husky for git hooks ([55dce88](https://github.com/tks18/node-express-template/commit/55dce88c7a14672bea44a649d8e31e7301b25f6e))


### Docs 📃

* update package.json, readme ([572b1d2](https://github.com/tks18/node-express-template/commit/572b1d2fb84f26bb8190815688c569bd9417536b))


### Build System 🏗

* **package:** add cross-env to dependencies, add sequelize, pg packages ([8f886f1](https://github.com/tks18/node-express-template/commit/8f886f1c6313c4e85e6ca2c6b789bec3b9cd9006))


### Bug Fixes 🛠

* **app.ts:** load env variables before any module imports ([d8b3959](https://github.com/tks18/node-express-template/commit/d8b395987aeb3b6e3548a69c35d50a2414dc9272))
* **plugins/logger:** fix log level for winston app logger ([ee26d6f](https://github.com/tks18/node-express-template/commit/ee26d6fe8cd36eac89d4aaf71971b706544274ec))


### Features 🔥

* **plugins/db:** initialize sequelize function with env vars ([c5653ee](https://github.com/tks18/node-express-template/commit/c5653ee6ef8fec7341ab6f02df620b172896bab4))
* **plugins/logger:** create a debug logger for database actions ([a8eaef2](https://github.com/tks18/node-express-template/commit/a8eaef25924b5fb47b0fe30966140c934008998a))
* **plugins/server:** add db close action to health checker service ([4ccbb65](https://github.com/tks18/node-express-template/commit/4ccbb6587d09f512bd56aca0600d93d97d7b8fd6))
* **plugins/server:** integrate db authenticate functions in the server class ([2a07340](https://github.com/tks18/node-express-template/commit/2a0734082399bed1a152707d82ff163f3325d803))
