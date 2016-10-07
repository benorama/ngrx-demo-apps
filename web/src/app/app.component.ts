import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from './app.state';
import * as counterActions from 'ngrx-demo-core';
//import * as counterActions from './counter/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  counter$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.select(s => s.counter.total);
  }

  decrement() {
    this.store.dispatch(new counterActions.DecrementAction());
  }

  increment() {
    this.store.dispatch(new counterActions.IncrementAction());
  }

  reset() {
    this.store.dispatch(new counterActions.ResetAction());
  }

}
