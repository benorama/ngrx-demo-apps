import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CounterEffects, CounterModule } from 'ngrx-demo-core';
import { reducer } from './app.reducer';
import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //  With npm link, effects do not work `Error: Unexpected value 'CounterModule' imported by the module 'AppModule'`
    CounterModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    //  With npm link, effects do not work `EXCEPTION: No provider for Actions!`
    //EffectsModule.runAfterBootstrap(CounterEffects), 
  ],
  providers: []
})
export class AppModule { }
