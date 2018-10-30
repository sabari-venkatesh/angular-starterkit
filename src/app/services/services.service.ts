import { Injectable, OnInit } from '@angular/core';
import { MENU } from '../mocks/menu';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {

  currentMenu: any = {};

  constructor() {
  }

  getService(name: string, parent: string): Observable<{}> {
    this.currentMenu = MENU.find(item => item.name.toLowerCase() === parent).children;
    return of(this.currentMenu.find(service => service.path === name));
  }

}
