/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
    'ngrx-demo-core': 'vendor/ngrx-demo-core',
    'ngrx-store-logger': 'vendor/ngrx-store-logger',
    '@ngrx': 'vendor/@ngrx'
};

/** User packages configuration. */
const packages: any = {
  'ngrx-demo-core': { main: 'index' },
  'ngrx-demo-core/counter': { main: 'index' },
  'ngrx-demo-core/foo': { main: 'index' },
  '@ngrx/core': {
      main: 'index.js',
      format: 'cjs'
  },
  '@ngrx/store': {
      main: 'index.js',
      format: 'cjs'
  },
  'ngrx-store-logger': { main: 'dist/index' }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared'
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
