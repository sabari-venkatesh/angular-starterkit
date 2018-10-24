import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LocationComponent } from './location/location.component';
import { LocationDetailComponent } from './location/details/location-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    LocationDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
