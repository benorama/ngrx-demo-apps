import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
//import * as fromRouter from '@ngrx/router-store';
import { storeLogger } from 'ngrx-store-logger';
import { storeFreeze } from 'ngrx-store-freeze';
import { share, Selector } from './shared/util';
import { environment } from '../environments/environment';


//import * as fromCounter from './counter';
import * as fromCounter from 'ngrx-demo-core';


export interface State {
  counter: fromCounter.CounterState;
  //router: fromRouter.RouterState;
}

const reducers = {
  counter: fromCounter.counterReducer,
  //router: fromRouter.routerReducer,
};

const developmentReducer = compose(storeFreeze, combineReducers)(reducers);
const productionReducer = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  }
  else {
    return developmentReducer(state, action);
  }
}
