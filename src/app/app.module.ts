import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LocationComponent } from './location/location.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
