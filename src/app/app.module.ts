import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoundProgressModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
