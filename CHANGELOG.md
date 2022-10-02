# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.0.0](https://github.com/tks18/node-express-template/compare/v0.0.1-2...v1.0.0) (2022-10-02)


### Bug Fixes 🛠

* **models:** add necessary constraints for fact tables ([420e272](https://github.com/tks18/node-express-template/commit/420e2724e1e7f3eac6267dc6a3331cd65ff43ec1))
* **models:** add necessary constraints for fields in master tables ([869b654](https://github.com/tks18/node-express-template/commit/869b65405e2410c0c9e3e1848e391889f204ebf0))


### Docs 📃

* **plugins/server:** write jsdoc for function ([f615b6c](https://github.com/tks18/node-express-template/commit/f615b6c5ca02fe4af4a342bba94fd3b9f9b3f67a))


### Build System 🏗

* **package:** add bcrypt, downgrade dot-prop for compatibility ([c18617c](https://github.com/tks18/node-express-template/commit/c18617c1845371a40826bc3be9f7e70503072aa5))


### Code Refactoring 🖌

* **models:** refactor model index file to import dynamically ([a86a17a](https://github.com/tks18/node-express-template/commit/a86a17ad74ac0aaa882d52b4645ddd6e8e86b3ab))
* **plugins/axios:** fix exports ([fbbd720](https://github.com/tks18/node-express-template/commit/fbbd7203e194cdc30c546149f92526fec2c3e1f6))
* **plugins/server:** fix exports ([d95c5ec](https://github.com/tks18/node-express-template/commit/d95c5ecb85678d100788f0992326935985e333f6))
* **plugins/server:** fix exports and imports ([2a3eed5](https://github.com/tks18/node-express-template/commit/2a3eed57f010ef5a922d1d9e0eda0019a9320b0d))
* **plugins/server:** fix imports ([46e3e2d](https://github.com/tks18/node-express-template/commit/46e3e2d6e673fe301bb732ae73e71394dd793f89))
* **plugins:** fix exports ([bf3a244](https://github.com/tks18/node-express-template/commit/bf3a244ebd042915f55886f8d0eebac42875b8dc))
* **types:** declare x-session-header in express declaration ([6457550](https://github.com/tks18/node-express-template/commit/64575505389149fb5655d1a1c217b92058190e26))


### Features 🔥

* **express-database-handler:** add a function for pushing docs into DB ([e1add17](https://github.com/tks18/node-express-template/commit/e1add1702ea0fdca46b046fa71d887d78861bc01))
* **express-database-handler:** add a function for viewing docs from DB ([6c45419](https://github.com/tks18/node-express-template/commit/6c454194a85e55cb9e899fe54b506aa453ac3f99))
* **express-database-handler:** add functions for editing docs and deleting docs from database ([5b67d4e](https://github.com/tks18/node-express-template/commit/5b67d4eb3e363b9db2ff6d3fe7ab3864ecfc2c6d))
* **express-database-handler:** write a class for database handler functions ([96e48e8](https://github.com/tks18/node-express-template/commit/96e48e8594793fa70e89f5fd10a5f9810c63b659))
* **express-database-handler:** write a helper function for handling filter object from request ([dc382be](https://github.com/tks18/node-express-template/commit/dc382bee4ef48dcb069a65ea2cf14549ea6bda58))
* **express-database-handler:** write a helper function for handling include objects from request ([9d0dc7f](https://github.com/tks18/node-express-template/commit/9d0dc7f7581468127f218a477832b8a30cec3fa2))
* **express-database-handler:** write a helper function for handling order objects from request ([ee31990](https://github.com/tks18/node-express-template/commit/ee319907496df655c076c6c68359f8d75c0ceb58))
* **models:** add a model map which maps string to model for include operations ([c1daf16](https://github.com/tks18/node-express-template/commit/c1daf16d1b99cfdcea5212ade7986324c4a098bc))
* **models:** add user model for authentication of users ([b443fbf](https://github.com/tks18/node-express-template/commit/b443fbf33b422baac4b7ab4c9bd85d9f832fa75b))
* **plugins/calendar-builder:** only add incremental rows to database ([19da973](https://github.com/tks18/node-express-template/commit/19da97362ee01ce88f6b5c24cdf631b23efb1fb3))
* **plugins/jwt:** introduce JWT operations for user verification ([3df53d3](https://github.com/tks18/node-express-template/commit/3df53d30c1a12babb4f4255c5a9971a94c170bf8))
* **plugins/middlewares:** write cors, jwt middleware for express ([7e5bb54](https://github.com/tks18/node-express-template/commit/7e5bb540794f23da997abf1141ed682adfd957b9))
* **plugins/server:** write a server helper function for Hosting DB Routes ([ddbb7b2](https://github.com/tks18/node-express-template/commit/ddbb7b2ca533e0560e69a5efa25d959c44dc7fa7))
* **routes/data:** write the DB Route Config to Automate Hosting of Routes ([bf4c334](https://github.com/tks18/node-express-template/commit/bf4c334e5ac88d5420a7c6a6d0e0b1d6851ec30a))
* **routes/setup:** add routes for initial setup functions ([9054c97](https://github.com/tks18/node-express-template/commit/9054c9750500d4d77f0af0c8e8d942f52b9e7eb7))
* **routes:** add all base paths, add paths for handling 404 paths ([f3500c2](https://github.com/tks18/node-express-template/commit/f3500c22f58ad8ac8f2921b3febe4ff5bb781259))
* **routes:** host the config path using the config handler ([0c8821c](https://github.com/tks18/node-express-template/commit/0c8821c49949ac1f71987d162d577bc2c4a0f7b3))
* **routes:** write routes for user - register, signin, verify operations ([e51432f](https://github.com/tks18/node-express-template/commit/e51432f35bad2dbcf20e0de6f376be3d27462b72))

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
