import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

//import { CounterModule } from 'ngrx-demo-core';
import { reducer } from './app.reducer';

/*
  Remote effects do not work `EXCEPTION: No provider for Actions!`
  import { CounterEffects } from 'ngrx-demo-core';
*/
import { CounterEffects } from './counter';
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
    //CounterModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.runAfterBootstrap(CounterEffects),
  ],
  providers: []
})
export class AppModule { }
