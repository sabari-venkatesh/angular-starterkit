import { Injectable } from '@angular/core';
import { Menu } from './menu';
import { MENU } from './mock-menu';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MenuService {
  constructor() { }

  getMenu(): Observable<Menu[]> {
    return of(MENU);
  }
}
