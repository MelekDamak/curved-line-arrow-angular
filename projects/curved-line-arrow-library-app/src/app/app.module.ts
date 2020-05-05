import { CurvedLineArrowModule } from './../../../curved-line-arrow/src/lib/curved-line-arrow.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CurvedLineArrowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
