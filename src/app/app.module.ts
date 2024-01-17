import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ThingsModule } from './things/things.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ThingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
