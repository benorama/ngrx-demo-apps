import { Action } from '@ngrx/store';
import { label } from '../shared/util';

export const CounterActionTypes = {
  INCREMENT: label('[Layout] Increment'),
  DECREMENT: label('[Layout] Decrement'),
  RESET: label('[Layout] Reset'),
  RESET_SUCCESS: label('[Layout] ResetSucess')
};


export class IncrementAction implements Action {
  type = CounterActionTypes.INCREMENT;
  constructor() {
    console.log('INCREMENT action');
  }
}

export class DecrementAction implements Action {
  type = CounterActionTypes.DECREMENT;
  constructor() {
    console.log('DECREMENT action');
  }
}

export class ResetAction implements Action {
  type = CounterActionTypes.RESET;
  constructor() {
    console.log('RESET action');
  }
}

export class ResetSuccessAction implements Action {
  type = CounterActionTypes.RESET_SUCCESS;
  constructor() {
    console.log('RESET_SUCCESS action');
  }
}

export type CounterActions =
    IncrementAction
  | DecrementAction
  | ResetAction
  | ResetSuccessAction;
