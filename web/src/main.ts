import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { provideStore } from '@ngrx/store';

import { WebAppComponent, environment } from './app/';

import { REDUCER_PROVIDERS } from 'demo-core/app.reducer';
import { CounterActions } from 'demo-core/app.actions';

if (environment.production) {
  enableProdMode();
}

bootstrap(WebAppComponent, [
   CounterActions,
   provideStore(REDUCER_PROVIDERS),
]);

