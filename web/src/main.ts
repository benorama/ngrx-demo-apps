import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { combineReducers, provideStore } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';

import { AppComponent, environment } from './app';

import { counterReducer, CounterActions, FooService } from 'ngrx-demo-core';

if (environment.production) {
  enableProdMode();
}

let actions = [
  CounterActions,
  // Add other actions here
]

let services = [
  FooService,
  // Add other services here
]

let reducers = compose(combineReducers)({
    counterState: counterReducer,
    // Add other state+reducers here
});

bootstrap(AppComponent, [
   provideStore(reducers),
   services,
   actions
]);

