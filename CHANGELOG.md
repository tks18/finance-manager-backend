# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.0.1-2](https://github.com/tks18/node-express-template/compare/v0.0.1-1...v0.0.1-2) (2022-09-29)


### CI 🛠

* **scripts:** add a script for preparing the build and publishing it ([0844a63](https://github.com/tks18/node-express-template/commit/0844a632248c265e3305638dbc7933435ebc1600))


### Features 🔥

* **models:** add expenses transacation table along with relationships ([bb22528](https://github.com/tks18/node-express-template/commit/bb22528b551f32e11ab8116ff92b483e753c81ef))
* **models:** add incomes transaction table along with relationships ([2b81579](https://github.com/tks18/node-express-template/commit/2b815792aba1ce6686f2d55c6ef18f83307cbe79))
* **models:** add investments transaction table ([3ac899c](https://github.com/tks18/node-express-template/commit/3ac899c73ec13193a6b184444212e928dc9c1a57))
* **models:** add market-data transaction table ([081950c](https://github.com/tks18/node-express-template/commit/081950c6bedddab5c9e01f506596418a563d9cad))
* **models:** add opening balances transaction table ([23fcd26](https://github.com/tks18/node-express-template/commit/23fcd26fc84cb1636f5f7cdd742797a3a91f33be))
* **models:** write relationships for asset master table ([5826d52](https://github.com/tks18/node-express-template/commit/5826d5293486f0ba2740a2d63c6d0f5b0cc191fb))
* **models:** write relationships for calendar master table ([56249f9](https://github.com/tks18/node-express-template/commit/56249f9d408a18b253823859322ae83fdbae91bf))
* **models:** write relationships for investment master table ([8599004](https://github.com/tks18/node-express-template/commit/8599004741d5de8082b39ee80c2a69f3d1faab9e))
* **models:** write relationships for other masters - bank, emi, debit, credit card, insurane ([d922bea](https://github.com/tks18/node-express-template/commit/d922bea2dde31d1d1323a2e4cdda1ee29b2b0bb5))
* **plugins:** write a calendar builder plugin for building calendar master table ([b46fd8f](https://github.com/tks18/node-express-template/commit/b46fd8f6825d96aae6d00cfb3e70a510f5d1a990))

### [0.0.1-1](https://github.com/tks18/node-express-template/compare/v0.0.1-0...v0.0.1-1) (2022-09-28)


### Docs 📃

* **readme:** update readme file with badges ([722bb80](https://github.com/tks18/node-express-template/commit/722bb8071b2054a755872fda3274125d12e2f9e7))


### Code Refactoring 🖌

* **plugins/db:** remove exports for unwanted functions ([8287b50](https://github.com/tks18/node-express-template/commit/8287b5029059fb8e16d332a121e1beaf66d678b3))


### Build System 🏗

* **eslint:** give correct ecma version for eslint ([0b1c4a2](https://github.com/tks18/node-express-template/commit/0b1c4a236f37c6c25579a8a9b2a736a0a4ebe3d9))
* **package:** update version for node-types ([76d7e1e](https://github.com/tks18/node-express-template/commit/76d7e1eb652d43fd9114afffcdf4aa288feae401))


### Features 🔥

* **models:** add asset category and asset master table ([d891033](https://github.com/tks18/node-express-template/commit/d8910330238b8cbd65081721cfc1e657bb9b4b38))
* **models:** add calendar master table ([df90fcb](https://github.com/tks18/node-express-template/commit/df90fcb610d763fd4d242b2653d517dace7d98b5))
* **models:** add income category master and income master table ([fc4bf54](https://github.com/tks18/node-express-template/commit/fc4bf54f552eea60ebd900eab138e6a723327160))
* **models:** add income category master and income master table ([b9892c3](https://github.com/tks18/node-express-template/commit/b9892c391622bd7ac577aaa2996b319262ff6710))
* **models:** add investment category and investment master table ([e2403f9](https://github.com/tks18/node-express-template/commit/e2403f9d25da064bbb2bab263f0c9283f51c07e7))
* **models:** add other master tables - bank, credit card, debit card, emi and insurances ([3f6bcad](https://github.com/tks18/node-express-template/commit/3f6bcadfd11d4dcaf3b3417c4cd30c84338452bc))
* **models:** write a function to initialize all models in sequelize ([149549e](https://github.com/tks18/node-express-template/commit/149549e98c09fda9904834ff52b1fc9ec5176e71))
* **plugins/logger:** add a exception handler for winston logger to log exceptions in the app ([0b25465](https://github.com/tks18/node-express-template/commit/0b2546507e3b6f6d464b3764d3ac12f76ee2c269))
* **plugins/server:** add the models initialize function to the server then lineup ([954f903](https://github.com/tks18/node-express-template/commit/954f903e7f968d2b7b34eadb796b6dbb72b87c42))

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
