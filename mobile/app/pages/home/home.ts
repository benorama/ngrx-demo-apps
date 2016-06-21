import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

// Share module
import { AppState } from '../../';
import { CounterActions } from 'ngrx-demo-core';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  
  counter$: Observable<number>;

  constructor(private counterActions: CounterActions,
              private store: Store<AppState>) {
    this.counter$ = this.store.select(s => s.counterState.total);
  }

  decrement() {
    this.store.dispatch(this.counterActions.decrement());
  }

  increment() {
    this.store.dispatch(this.counterActions.increment());
  }

  reset() {
    this.store.dispatch(this.counterActions.reset());
  }

}
