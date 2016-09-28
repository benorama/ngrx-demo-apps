import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

//import { CounterActions } from './counter.actions';
import { CounterEffects } from './counter.effects';
import { counterReducer } from './counter.reducer';

@NgModule({
  declarations: [
  ],
  imports: [
    EffectsModule.runAfterBootstrap(CounterEffects)
  ],
  providers: [
    //CounterActions
  ]
})
export class CounterModule {}
