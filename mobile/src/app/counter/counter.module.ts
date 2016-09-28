import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { CounterEffects } from './counter.effects';
import { counterReducer } from './counter.reducer';

@NgModule({
  declarations: [
  ],
  imports: [
    EffectsModule.run(CounterEffects)
  ],
  providers: [
  ]
})
export class CounterModule {}
