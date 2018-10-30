/**
 * Points to note while creating routes
 * 1. There are no leading slashes in the path
 * 2. The :name in the route is a parameter to fetch the corresponding service with the given name
 * 3. data property stores arbitrary data for the route. eg., page titles
 * 4. empty path is the default url
 * 5. ** - wildcard if a requested url doesn't match any paths defined earlier
 * 6. The order of the routes in the configuration matters (static paths, empty path, wildcard)
 * 7. enableTracing: true outputs the navigation events in console
 */


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
