import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { LocationDetailComponent } from './location/details/location-detail.component';

const routes: Routes = [
  { path: 'locations', component: LocationComponent },
  { path: 'locations/:city', component: LocationDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
