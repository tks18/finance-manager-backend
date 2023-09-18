# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.2.0](https://github.com/tks18/finance-manager-backend/compare/v3.1.0...v3.2.0) (2023-09-18)


### Build System 🏗

* update all the packages ([ee18c0c](https://github.com/tks18/finance-manager-backend/commit/ee18c0c34d323373a422f5e78d545c291efa64af))


### Features 🔥

* **routes/user:** add a new route for checking user registration ([a843f9d](https://github.com/tks18/finance-manager-backend/commit/a843f9d148c6ecebed327ce0a9ec0a7448808eea))
* **views:** update to views @ v2.1.0 ([f2e3bad](https://github.com/tks18/finance-manager-backend/commit/f2e3bad43a7f4a1635fb6ca9b14a65d8ac258132))

## [3.1.0](https://github.com/tks18/finance-manager-backend/compare/v3.0.0...v3.1.0) (2023-08-17)


### Bug Fixes 🛠

* **models/insurance-master:** fix the cover period field date formats to ISO standard ([66271b9](https://github.com/tks18/finance-manager-backend/commit/66271b9edf5ae96aa2f36dd3ccc70a8386a123ac))

## [3.0.0](https://github.com/tks18/finance-manager-backend/compare/v2.8.0...v3.0.0) (2023-08-15)


### Build System 🏗

* **package:** update packages ([7db63e6](https://github.com/tks18/finance-manager-backend/commit/7db63e6bd860e8529c10ac7a7f03e4312ae159ef))


### Features 🔥

* **models/income-sources:** link the income source master to transactions and category master ([4042414](https://github.com/tks18/finance-manager-backend/commit/404241437d9579774b504ff02be156759dc8f3f0))
* **models:** add income source model to manage income sources ([14a9630](https://github.com/tks18/finance-manager-backend/commit/14a9630be3de1324f97c4ac4de302471823efd1b))
* **routes/user:** dont allow creation of users more than 1 ([2c5983d](https://github.com/tks18/finance-manager-backend/commit/2c5983d140ab52354bfa960b4c57849d2a237d42))
* **users:** dont allow creation of more than 1 user in the system ([589cbb2](https://github.com/tks18/finance-manager-backend/commit/589cbb23101fb54714be611b06829cafb02bd175))
* **views:** upgrade to views@v2.0.0 ([25a66cb](https://github.com/tks18/finance-manager-backend/commit/25a66cbf3addc44157fd0ccf1248d3336440739a))

## [2.8.0](https://github.com/tks18/finance-manager-backend/compare/v2.7.0...v2.8.0) (2023-06-20)


### Build System 🏗

* **packages:** update all packages in the bundle ([cd976d7](https://github.com/tks18/finance-manager-backend/commit/cd976d737eb018355d99cf15d2e57c4649e52cbc))


### Bug Fixes 🛠

* **calendar:** fix calendar-builder types according to new version ([d811f28](https://github.com/tks18/finance-manager-backend/commit/d811f28014010938c661c16be9bd3a48b9341b6a))

## [2.7.0](https://github.com/tks18/finance-manager-backend/compare/v2.6.2...v2.7.0) (2022-12-31)


### Features 🔥

* **views:** update to views@1.5.0 ([148c1c1](https://github.com/tks18/finance-manager-backend/commit/148c1c11c5d54a23e51f6e870b896a8e396ed9f7))

### [2.6.2](https://github.com/tks18/finance-manager-backend/compare/v2.6.1...v2.6.2) (2022-12-31)


### Bug Fixes 🛠

* **routes/data/market-data:** fix the start-date for market-data ([5bbd780](https://github.com/tks18/finance-manager-backend/commit/5bbd780942619a974b4790f05e32afe3a3c1c1c4))

### [2.6.1](https://github.com/tks18/finance-manager-backend/compare/v2.6.0...v2.6.1) (2022-12-31)


### Features 🔥

* **views:** update to views@1.4.1 ([c2f3669](https://github.com/tks18/finance-manager-backend/commit/c2f3669edacc10572f19e8faf1913b0ba062e6b5))

## [2.6.0](https://github.com/tks18/finance-manager-backend/compare/v2.5.0...v2.6.0) (2022-12-30)


### Features 🔥

* **models/transactions:** add a new remarks column for capturing t'ion level details ([f2146e8](https://github.com/tks18/finance-manager-backend/commit/f2146e8295669114627bbfe478e017b666a14e3a))
* **views:** update to views@1.4.0 ([efc0f54](https://github.com/tks18/finance-manager-backend/commit/efc0f5452529cda9782f3e76f4d8c627d135578a))

## [2.5.0](https://github.com/tks18/finance-manager-backend/compare/v2.4.1...v2.5.0) (2022-12-28)


### Features 🔥

* **models:** add a new model for managing investment-agents ([53f20a2](https://github.com/tks18/finance-manager-backend/commit/53f20a283ff3b4b067b84a50e137f8ddc4ccc083))
* **routes/data:** expose the new investment-agent model to api ([0418262](https://github.com/tks18/finance-manager-backend/commit/041826284c1abdc6cbe210ead402943d25763b1a))
* **views:** update to views@1.3.0 ([9213858](https://github.com/tks18/finance-manager-backend/commit/9213858ff53441c6ed6c50fb4af651249efc380f))

### [2.4.1](https://github.com/tks18/finance-manager-backend/compare/v2.4.0...v2.4.1) (2022-12-28)


### Features 🔥

* **views:** update to views@1.2.1 ([7615372](https://github.com/tks18/finance-manager-backend/commit/76153724e318c369922b9bd1ec0ec3d94df2bafc))

## [2.4.0](https://github.com/tks18/finance-manager-backend/compare/v2.3.0...v2.4.0) (2022-12-27)


### Bug Fixes 🛠

* **routes/data/market-data:** fix - dont contact investment server when start and end date are same ([1478d7e](https://github.com/tks18/finance-manager-backend/commit/1478d7eb636d480e763cadaf6ed16a19be6977ae))

## [2.3.0](https://github.com/tks18/finance-manager-backend/compare/v2.2.3...v2.3.0) (2022-12-25)


### Features 🔥

* **views:** update to views@1.2.0 ([e08d146](https://github.com/tks18/finance-manager-backend/commit/e08d146b81ef65f03a9ab030b0fb1278a93236b1))

### [2.2.3](https://github.com/tks18/finance-manager-backend/compare/v2.2.2...v2.2.3) (2022-12-22)


### Bug Fixes 🛠

* **.env:** fix .env file path in production environment ([cb116ab](https://github.com/tks18/finance-manager-backend/commit/cb116ab17d700089cee14762fc836b68426e89e6))

### [2.2.2](https://github.com/tks18/finance-manager-backend/compare/v2.2.1...v2.2.2) (2022-12-21)


### Bug Fixes 🛠

* **db:** fix ssl for db connection ([5eed158](https://github.com/tks18/finance-manager-backend/commit/5eed15840baee3bf8ff045e2b099194fc2beffe1))

### [2.2.1](https://github.com/tks18/finance-manager-backend/compare/v2.2.0...v2.2.1) (2022-12-21)


### Bug Fixes 🛠

* **plugins/db:** allow ssl login for db connection ([b138494](https://github.com/tks18/finance-manager-backend/commit/b13849418834ca10d320a0a38c239efb786666d3))

## [2.2.0](https://github.com/tks18/finance-manager-backend/compare/v2.1.1...v2.2.0) (2022-12-17)


### Bug Fixes 🛠

* **views:** update to the new views app ([3f354d5](https://github.com/tks18/finance-manager-backend/commit/3f354d5057a79532c62a9c8281ac25a5263d20e0))

### [2.1.1](https://github.com/tks18/finance-manager-backend/compare/v2.1.0...v2.1.1) (2022-12-13)


### Bug Fixes 🛠

* **plugins/calendar:** fix db not getting updated on calendar updaet ([6f706bb](https://github.com/tks18/finance-manager-backend/commit/6f706bb3271c558c766eb9002c8329570f2ef8f3))

## [2.1.0](https://github.com/tks18/finance-manager-backend/compare/v2.0.2...v2.1.0) (2022-12-13)


### Features 🔥

* add new model, and use python api for managing investment data ([b723ad4](https://github.com/tks18/finance-manager-backend/commit/b723ad4750776791ed42f107e21d07e941962cb5))
* **views:** update to new frontend ([2c89cee](https://github.com/tks18/finance-manager-backend/commit/2c89ceebdad0f461a5845086b1068d5bbf7c48f4))

### [2.0.2](https://github.com/tks18/finance-manager-backend/compare/v2.0.1...v2.0.2) (2022-12-07)


### Features 🔥

* **views:** update to latest frontend version ([6c1d547](https://github.com/tks18/finance-manager-backend/commit/6c1d54795209b977c799c321ac758729edfafed3))

### [2.0.1](https://github.com/tks18/finance-manager-backend/compare/v2.0.0...v2.0.1) (2022-12-06)


### Bug Fixes 🛠

* **package:** remove helmet and x-xss which caused issues in local env ([8d98c24](https://github.com/tks18/finance-manager-backend/commit/8d98c24dac249c276cb08214f1e3bf6634123ce3))
* **plugins/server:** fix local serving of files ([4882f61](https://github.com/tks18/finance-manager-backend/commit/4882f61c41ec18d366e348e710c0b07dd284dfee))


### Features 🔥

* **views:** fix csp tag ([dacd1db](https://github.com/tks18/finance-manager-backend/commit/dacd1db7e1946835875a143efe99001eba6fcac9))

## [2.0.0](https://github.com/tks18/finance-manager-backend/compare/v1.1.2...v2.0.0) (2022-12-06)


### Features 🔥

* **view:** use the new major 1.0.0 release of frontend ([f1a1a54](https://github.com/tks18/finance-manager-backend/commit/f1a1a54fd0966a2ea5c4c122bd444f88fa6d384b))

### [1.1.2](https://github.com/tks18/finance-manager-backend/compare/v1.1.1...v1.1.2) (2022-12-06)


### Bug Fixes 🛠

* **plugins/server/dbhandler:** remove raw option for db query results ([b96fe84](https://github.com/tks18/finance-manager-backend/commit/b96fe8464c7f47ca624d160b1bfb40402dd01564))


### Code Refactoring 🖌

* **plugins/server/dbhandler:** add types for additional routes ([4d58dd0](https://github.com/tks18/finance-manager-backend/commit/4d58dd084f5018d0187e7bb66560ecd225765650))


### Features 🔥

* **plugins/server/dbhandler:** allow custom handlers to host additional routes ([6c46e4d](https://github.com/tks18/finance-manager-backend/commit/6c46e4d80ba21ba408a773f5740753cf959d4373))
* **plugins/server:** add the additional route config for config helper ([4dce512](https://github.com/tks18/finance-manager-backend/commit/4dce5122a3c0aaa362347189a522097412ffad9b))
* **routes/data:** add a additional route for calendar route to get date id ([73b1bef](https://github.com/tks18/finance-manager-backend/commit/73b1bef96612c946aaf02e7589dcfef0e4b53ac8))

### [1.1.1](https://github.com/tks18/finance-manager-backend/compare/v1.1.0...v1.1.1) (2022-11-12)


### Bug Fixes 🛠

* **plugins/server:** allow cors header ([23a048f](https://github.com/tks18/finance-manager-backend/commit/23a048f4f890b3cc08de2f0429017c24e3435225))

## [1.1.0](https://github.com/tks18/finance-manager-backend/compare/v1.1.0-0...v1.1.0) (2022-11-12)


### Bug Fixes 🛠

* **plugins/server/database-handler:** enable raw option for postgresql queries ([37c1599](https://github.com/tks18/finance-manager-backend/commit/37c1599edb48392edfe7b0f9749abcd73153b980))

## [1.1.0-0](https://github.com/tks18/finance-manager-backend/compare/v1.0.0...v1.1.0-0) (2022-10-18)


### Others 🔧

* **package:** update the git url in package.json ([d601e7b](https://github.com/tks18/finance-manager-backend/commit/d601e7b38b0a08dc6d2b20cc8a6046923a37222e))


### Bug Fixes 🛠

* fix some misc types ([91912b7](https://github.com/tks18/finance-manager-backend/commit/91912b75a68059435513115f0fa9259826a04cb8))
* **routes:** serve all the api routes under /api path ([19b8973](https://github.com/tks18/finance-manager-backend/commit/19b897389bd807d95af2765eb9baee2646e2b0e3))


### Features 🔥

* **routes/user:** add a endpoint for getting user document ([6ae14de](https://github.com/tks18/finance-manager-backend/commit/6ae14deea9eb6d1fbfd2c5b9364f5a1c94679813))
* **server/databasehandler:** write a new route for getting all columns in a table ([c6d6836](https://github.com/tks18/finance-manager-backend/commit/c6d683637d41ac496a41c6e7f75fa22a4d92c8b2))
* **views:** add latest views ([634aff1](https://github.com/tks18/finance-manager-backend/commit/634aff1184dbc824eca1718a6c7d11b815db4426))

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
