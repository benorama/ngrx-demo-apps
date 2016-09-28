import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';

/*
import {
  CounterActionTypes,
  ResetAction,
  ResetSuccessAction
} from './counter.actions';
*/
import {
  CounterActionTypes,
  ResetAction,
  ResetSuccessAction
} from 'ngrx-demo-core';

@Injectable()
export class CounterEffects {
  constructor(
    private actions$: Actions
  ) { }


  @Effect() resetSuccess$ = this.actions$
    .ofType(CounterActionTypes.RESET)
    .startWith(new ResetAction())
    .map(() => new ResetSuccessAction());

}
