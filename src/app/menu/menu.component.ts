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

  menu$: Observable<Menu[]>;
  constructor(
    private service: MenuService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.menu$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.service.getMenu();
      })
    );
  }

}
