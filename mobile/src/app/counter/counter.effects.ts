import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';;
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/of';
import {
  CounterActionTypes,
  ResetAction,
  ResetSuccessAction
} from './counter.actions';

@Injectable()
export class CounterEffects {
  constructor(
    private actions$: Actions
  ) { }


  @Effect() resetSuccess$ = this.actions$
    .ofType(CounterActionTypes.RESET)
    .startWith(new ResetAction())
    .map(() => {
      console.log('REMOTE EFFECT');
      return new ResetSuccessAction()
    });

}
