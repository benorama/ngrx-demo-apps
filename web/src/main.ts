import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { combineReducers, provideStore } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { runEffects } from '@ngrx/effects';
import { storeLogger } from 'ngrx-store-logger';

import { AppComponent, environment } from './app';

import { counterReducer, CounterActions, CounterEffects, FooService } from 'ngrx-demo-core';

if (environment.production) {
  enableProdMode();
}

let actions = [
  CounterActions,
  // Add other actions here
]

let effects = [
  CounterEffects,
  // Add other effects here
]

let services = [
  FooService,
  // Add other services here
]

let reducers = compose(storeLogger(), combineReducers)({
    counterState: counterReducer,
    // Add other state+reducers here
});

bootstrap(AppComponent, [
   provideStore(reducers),
   runEffects(effects),
   services,
   actions
]);

