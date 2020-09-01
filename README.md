# basic API / NestJS

![Badge](https://img.shields.io/static/v1?label=Node&message=v12.16.2&color=green&style=flat&logo=NODE.JS&logoColor=white) ![Badge](https://img.shields.io/static/v1?label=TipeScript&message=v4.0.2&color=blue&style=flat&logo=TYPESCRIPT) ![Badge](https://img.shields.io/static/v1?label=NestJS&message=v7.5.1&color=red&style=flat&logo=NESTJS) ![Badge](https://img.shields.io/static/v1?label=MySQL&message=v8.0&color=orange&style=flat&logo=MYSQL&logoColor=white) 


Basic backend API using NestJS, TypeScript &amp; Mysql

## About!
 This application is a first try with NestJS to run a basic backend API restfull.

### #requirement

* [Node.js](https://nodejs.org/en/download/) installed.
* [NestJS](https://nestjs.com/) installed.
* [MySQL](https://www.mysql.com/downloads/) installed.

### #installation
 Download the application zip, or clone this repo:
```sh
$ git clone https://github.com/Mu-Oliari/basic-API-NestJS.git
```
 After download, navigate until `basic-API-NestJS` folder and install the dependencies:
 ```sh
$ cd basic-API-NestJS
$ npm install
```
dependencies below will be installed:
**dependencies:**
 >   "@nestjs/common"
    "@nestjs/config"
    "@nestjs/core"
    "@nestjs/platform-express"
    "@nestjs/swagger"
    "@nestjs/typeorm"
    "class-transformer"
    "class-validator"
    "mysql"
    "reflect-metadata"
    "rimraf"
    "rxjs"
    "swagger-ui-express"
    "typeorm"
    
  **devDependencies:**
  >  "@nestjs/cli"
    "@nestjs/schematics"
    "@nestjs/testing"
    "@types/express"
    "@types/jest"
    "@types/node"
    "@types/supertest"
    "@typescript-eslint/eslint-plugin"
    "@typescript-eslint/parser"
    "eslint"
    "eslint-config-prettier"
    "eslint-plugin-import"
    "jest"
    "prettier"
    "supertest"
    "ts-jest"
    "ts-loader"
    "ts-node"
    "tsconfig-paths"
    "typescript"

### #starting / configuring database
First create a `.env` file on root of the project, may have to contain de below information:

~~~
TYPEORM_CONNECTION=mysql
TYPEORM_HOST=localhost
TYPEORM_USERNAME=root
TYPEORM_PASSWORD=root
TYPEORM_DATABASE=[YourDatabaseHere]
TYPEORM_PORT=3306
INSECURE_AUTH=true
TYPEORM_ENTITIES=src/**/*.entity.ts
TYPEORM_ENTITIES_DIR=src/models
TYPEORM_MIGRATIONS=src/migrations/**/*.ts
TYPEORM_MIGRATIONS_DIR=src/migrations
~~~
Create Database on MySQL and replace [YourDatabaseHere] to your database. 

### #run

working on this . . .

#### #license
MIT

----
