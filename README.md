# ng-to-vue

A demo of a Vue.js app built by refactoring an Angular 1 app.  To illustrate how easy it is to go from AngularJS to Vue, an existing 
AngularJS app (https://github.com/genehuh39/angular-es6-mobx-demo) was rebuilt using Vue.js 2.x and Vuex.  

Vuex is the state management pattern and library for Vue.js apps (https://vuex.vuejs.org/en/intro.html).  It was inspired by Flux, Redux and Elm. 

## Getting Started
You will need `node` (`brew install node` or https://nodejs.org/en/) and `npm` (which ships with node).

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot relod at localhost:8080 with mock api
npm start 

# serve mock api at localhost:3003
npm run mock-api

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
