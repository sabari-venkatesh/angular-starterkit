import { Injectable } from '@angular/core';
import { Menu } from './menu';
import { MENU } from '../mocks/menu';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MenuService {
  constructor() { }

  getMenu(): Observable<Menu[]> {
    return of(MENU.sort((a, b) => a.order - b.order)); // sort first level menuitems
  }
}
