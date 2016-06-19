import { ActionReducer, Action } from '@ngrx/store';

import { CounterActions, CounterState, initialCounterState } from './';

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

        case CounterActions.RESET:
            return initialCounterState;

        default:
            return state;
    }
}