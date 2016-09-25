import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from './app.state';
import { CounterActions } from '@benorama/ngrx-demo-core';

@Component({
  selector: 'ngrx-demo-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  
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
