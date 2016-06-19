import { ActionReducer, Action } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';

import { counterReducer } from './counter';

export const REDUCER_PROVIDERS = compose(combineReducers)({
    counterState: counterReducer,
    //router: routerReducer
});


