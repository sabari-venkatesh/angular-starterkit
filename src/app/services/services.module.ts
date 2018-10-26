import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';

import { ServicesListComponent } from './services-list/services-list.component';
import { ServicesDetailComponent } from './services-detail/services-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule
  ],
  declarations: [
    ServicesListComponent,
    ServicesDetailComponent
  ]
})
export class ServicesModule { }
