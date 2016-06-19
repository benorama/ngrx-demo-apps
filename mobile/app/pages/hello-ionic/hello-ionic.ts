import {Page} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { FooComponent } from 'demo-core/foo/foo.component';
import { AppState } from 'demo-core/app.state';
import { CounterActions } from 'demo-core/app.actions';

import {BarComponent} from '../../components/bar/bar';

@Page({
  directives: [BarComponent],
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {

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

}
