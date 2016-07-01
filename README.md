
## Introduction

This is a proof of concept that demonstrates the ability to share a Typescript package with core functionalities and business logic between an Angular2 web app and a Ionic2 mobile app.

Please check the Medium article [Hybrid mobile apps: sharing logic between Angular2 and Ionic2 apps](https://medium.com/@benorama/hybrid-mobile-apps-sharing-logic-between-angular2-and-ionic2-apps-7c32145b90d5#.m1x3vpyc0) for more info.

**Goals:**

* encapsulate all the business logic in a core module, based on [@ngrx/store](https://github.com/ngrx/store)
* keep specific view layout, markup and navigation logic in the app projects.

Note: [@ngrx/store](https://github.com/ngrx/store) is a RxJS powered state management inspired by Redux for Angular 2 apps. 
It's currently the most popular way to structure complex business logic in Angular2 apps.


## Running the apps locally

```
# Clone the repo
git clone https://github.com/benorama/ngrx-demo-apps.git
```

Prerequisites:
* [Typescript 1.8+](https://www.typescriptlang.org/index.html#download-links)
* [Typings 1.0+](https://github.com/typings/typings)
* [Angular CLI](https://cli.angular.io)
* [Ionic CLI (from Ionic2 latest beta)](http://ionicframework.com/docs/cli/)

Note: `ngrx-demo-core` module is shared between the apps with `npm link` but it could be published to `npmjs` and be used as a regular dependency.

### ngrx-demo-core module

First, compile `ngrx-demo-core` shared module. 

One of the key config settings is `"declaration": true` in `tsconfig.json` which will generate ‘.d.ts’ files (required to re-use the module in other Typescript projects). 

```
# Go into core module directory
cd ngrx-demo-apps/core

# Install dependencies (you can get a coffee...)
npm install

# Compile typescript into dist
tsc

# Copy package into dist
cp package.json dist/

# Go into dist to create a globally-installed symbolic link
cd dist
npm link
# Or npm publish

# Note: during dev, you can use 'tsc -w'
```

The shared module is now installed locally and can be used in other local npm projects.

### ngrx-demo-web app

Link `ngrx-demo-core` shared module and run the web app.

```
# Go into web Angular2 app directory
cd ../../web

# Install dependencies (you can get a burger...)
npm install

# Create a symlink from the local node_modules folder to the global shared module symlink
npm link ngrx-demo-core

# Run the web app locally
ng serve
```

### ngrx-demo-mobile app

As we did for the web app, link the `ngrx-demo-core` shared module and run the mobile app.

```
# Go into mobile Ionic2 app directory
cd ../mobile

# Install dependencies and typings (you can get a burger...)
npm install
typings install

# Create a symlink from the local node_modules folder to the global shared module symlink
npm link ngrx-demo-core

# Run the mobile app locally
ionic serve
```

## Bugs and feedback

If you have any questions or suggestions to improve the demo app, don't hesitate to submit an issue or a pull request!