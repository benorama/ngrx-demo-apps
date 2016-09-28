import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CounterModule, counterReducer } from '@benorama/ngrx-demo-core';
//import { CounterModule, counterReducer } from '../counter';
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
    CounterModule,
    StoreModule.provideStore({
      counterState: counterReducer
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  providers: []
})
export class AppModule { }
