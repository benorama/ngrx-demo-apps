import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/map';

import { CounterActions } from './counter.actions';

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions,
              private counterActions: CounterActions) {}

  @Effect() 
  resetSuccess$ = this.actions$
    .ofType(CounterActions.RESET)
    .map(({payload}) => {
      console.log('Doing some stuff on reset action');
      return this.counterActions.resetSuccess();
    });
        
}