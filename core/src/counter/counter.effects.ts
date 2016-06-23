import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { StateUpdates, Effect, toPayload } from '@ngrx/effects'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { CounterActions } from './';

@Injectable()
export class CounterEffects {
  constructor(private counterActions: CounterActions,
              private updates$: StateUpdates<any>) { }

  @Effect() resetSuccess$ = this.updates$
      // Listen for the 'RESET' action
      .whenAction(CounterActions.RESET)
      .map(toPayload)
      .map(payload => {
            console.log('Doing some stuff on reset action');
            return this.counterActions.resetSuccess();
        });
}