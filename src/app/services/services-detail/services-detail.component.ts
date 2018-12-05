import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ServicesService } from '../services.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-services-detail',
  templateUrl: './services-detail.component.html',
  styleUrls: ['./services-detail.component.css']
})
export class ServicesDetailComponent implements OnInit {

  service$: Observable<{}>;
  parentMenu: string;

  constructor(
    private route: ActivatedRoute,
    private service: ServicesService
  ) { }

  ngOnInit() {
    this.route
      .data
      .subscribe(route => this.parentMenu = route.routeName);
    this.service$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getService(params.get('name'), this.parentMenu))
    );
  }

}
