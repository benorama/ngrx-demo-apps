import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { FooComponent } from 'demo-core/foo/foo.component';
import { AppState } from 'demo-core/app.state';
import { CounterActions } from 'demo-core/app.actions';


@Component({
  directives: [FooComponent],
  moduleId: module.id,
  selector: 'web-app',
  templateUrl: 'web.component.html',
  styleUrls: ['web.component.css']
})
export class WebAppComponent {
  
  counter$: Observable<number>;
  title = 'web works!';

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
