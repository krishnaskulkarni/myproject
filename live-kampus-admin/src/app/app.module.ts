import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CityModule } from './city/city.module';
import { SchoolModule } from './school/school.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CityModule,
    SchoolModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
