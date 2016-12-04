import { Action } from '@ngrx/store';

export const CounterActionTypes = {
  INCREMENT: '[Counter] Increment',
  DECREMENT: '[Counter] Decrement',
  RESET: '[Counter] Reset',
  RESET_SUCCESS: '[Counter] ResetSucess'
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
