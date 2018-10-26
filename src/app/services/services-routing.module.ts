import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServicesListComponent } from './services-list/services-list.component';
import { ServicesDetailComponent } from './services-detail/services-detail.component';

const serviceRoutes: Routes = [
  { path: 'services', component: ServicesListComponent },
  { path: 'service/:name', component: ServicesDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(serviceRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ServicesRoutingModule { }
