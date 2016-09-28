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
}

export class DecrementAction implements Action {
  type = CounterActionTypes.DECREMENT;
}

export class ResetAction implements Action {
  type = CounterActionTypes.RESET;
}

export class ResetSuccessAction implements Action {
  type = CounterActionTypes.RESET_SUCCESS;
}

export type CounterActions =
    IncrementAction
  | DecrementAction
  | ResetAction
  | ResetSuccessAction;
