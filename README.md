
## Introduction

This is a proof of concept that demonstrates the ability to share a Typescript package with core functionalities and business logic between an Angular2 web app and a Ionic2 mobile app (also based on Angular2).

**Goals:**

* encapsulate all the business logic in a core module, based on [@ngrx/store](https://github.com/ngrx/store)
* keep specific view layout, markup and navigation logic in the app projects.

[@ngrx/store](https://github.com/ngrx/store) is a RxJS powered state management inspired by Redux for Angular 2 apps. 
It's currently the most popular way to structure complex business logic in Angular2 apps.

You can see article in here..

## Running the apps locally

```
# Clone the repo
git clone https://github.com/benorama/ngrx-demo-apps.git
```

Note: `ngrx-demo-core` module is shared between the apps with `npm link` but it could be published to `npmjs` and be used as a regular dependency.

### ngrx-demo-core module

First, compile `ngrx-demo-core` shared module. 

One of the key config settings is `"declaration": true` in `tsconfig.json` which will generate ‘.d.ts’ files (required to re-use the module in other Typescript projects). 

```
# Go into core module directory
cd ngrx-depo-apps/core

# Compile typescript into dist
tsc

# Copy package into dist
cp package.json dist/

# Go into dist to create a globally-installed symbolic link
cd dist
npm link
# Or npm publish
```

The shared module is now installed locally and can be used in other local npm projects.

### ngrx-demo-web app

Link `ngrx-demo-core` shared module and run the web app.

```
// Go into web Angular2 app directory and create a symlink from the local node_modules folder to the global shared module symlink
cd ../../web
npm link ngrx-demo-core

// Run the web app locally
ng serve
```

### ngrx-demo-mobile app

As we did for the web app, link the `ngrx-demo-core` shared module and run the mobile app.

```
// Go into mobile Ionic2 app directory and create a symlink from the local node_modules folder to the global shared module symlink
cd ../mobile
npm link ngrx-demo-core

// Run the mobile app locally
ionic serve
```

## Bugs and feedback

If you have any questions or suggestions to improve the demo app, don't hesitate to submit an issue or a pull request!