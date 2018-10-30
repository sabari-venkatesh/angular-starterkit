import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MenuService } from './menu.service';
import { Observable } from 'rxjs';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu$: Menu[];
  constructor(
    private service: MenuService,
    private route: ActivatedRoute
  ) { }

  sortMenu(): void {
    this.menu$.forEach((item) => {
      if (item.children) {
        item.children.sort((a, b) => a.order - b.order); // sort submenu by order
      }
    });
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        return this.service.getMenu();
      })
    ).subscribe((menu) => {
      this.menu$ = menu;
      this.sortMenu();
    });
  }
}
