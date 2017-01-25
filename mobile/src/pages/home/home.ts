import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../../app/app.state';
import * as counterActions from 'ngrx-demo-core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

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
