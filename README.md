# 📋 Task Manager App 📌

Yet another todo list application. Developed during Trybe's backend module.

## Features

### API

* Node.js
   * Express.js
* MongoDB
   * Mongoose
* OOP paradigm
* S.O.L.I.D. principles
* 100% coverage app unit tests

### React App

* React Hooks
* Redux
* Tests with React Testing Library

## Prerequisites

You will need the following installed on your computer.

* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* [MongoDB](https://www.mongodb.com/docs/guides/server/install/)

## Install it locally

1. Clone repository

   ```sh
   git clone https://github.com/rafa-el-souza/task-manager.git
   ```

2. Enter repo's folder

   ```sh
   cd task-manager
   ```

3. Install back-end dependencies

   ```sh
   cd task-manager/back-end
   
   npm install
   ```

4. Install front-end dependencies

   ```sh
   cd task-manager/front-end
   
   npm install
   ```

## Usage

### Initialize MongoDB

   ```sh
   sudo service mongodb start
   ```

### Initialize API

   ```sh
   cd task-manager/back-end

   npm start
   ```

### Initialize React App

   ```sh
   cd task-manager/front-end
   
   npm start
   ```

## Tests

* ### API Unit tests

   ```sh
   cd task-manager/back-end && npm run test:coverage
   ```

* ### Front-end tests

   ```sh
   cd task-manager/front-end && npm run test:coverage
   ```


## Todo

### Back-end
- [x] Add documentation
- [x] Implement API
- [x] 100% coverage unit tests
- [ ] Add integration tests
- [ ] Add swagger docs


### Front-end
- [x] Add documentation
- [x] Implement react app
- [ ] Add Tests
- [ ] Add Style

### General
- [ ] Add Docker
- [ ] Deploy
