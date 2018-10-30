import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MenuService } from './menu.service';
import { Menu } from './menu';
import { trigger, state, style, transition, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('flyIn', [
      transition(':enter', [
        query('.nav-item', [
          style({
            opacity: 0,
            transform: 'translateY(100px)'
          }),
          stagger(50, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ])
  ]
})
export class MenuComponent implements OnInit {

  menu$: Menu[];
  isHover: Boolean = false;
  constructor(
    private service: MenuService,
    private route: ActivatedRoute
  ) { }

  toggle() {
    this.isHover = !this.isHover;
  }

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
