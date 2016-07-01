import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class CounterActions {

    static DECREMENT: string = '[Counter] Decrement';
    decrement(): Action {
        return {
            type: CounterActions.DECREMENT
        };
    }

    static INCREMENT: string = '[Counter] Increment';
    increment(): Action {
        return {
            type: CounterActions.INCREMENT
        };
    }

    static RESET: string = '[Counter] Reset';
    reset(): Action {
        return {
            type: CounterActions.RESET
        };
    }

    static RESET_SUCCESS: string = '[Counter] Reset success';
    resetSuccess(): Action {
        return {
            type: CounterActions.RESET_SUCCESS
        };
    }
    

}