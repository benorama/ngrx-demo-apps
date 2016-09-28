import { ActionReducer, Action } from '@ngrx/store';

import { CounterActions } from './counter.actions';
import { CounterState, initialCounterState } from './counter.state';

export const counterReducer: ActionReducer<CounterState> = (state: CounterState = initialCounterState, action: Action) => {
    
    switch (action.type) {
        case CounterActions.INCREMENT:
            return Object.assign({}, state, {
                total : state.total + 1
            });

        case CounterActions.DECREMENT:
            return Object.assign({}, state, {
                total : state.total - 1
            });

        case CounterActions.RESET_SUCCESS:
            return initialCounterState;

        default:
            return state;
    }
}