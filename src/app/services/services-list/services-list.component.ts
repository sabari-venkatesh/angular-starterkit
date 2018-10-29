import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { Observable } from 'rxjs';
import { ServicesService } from '../services.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnInit {
  // services$: Observable<Service[]>;
  // selectedLink: string;

  constructor(
    // private service: ServicesService,
    // private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.services$ = this.route.paramMap.pipe(
    //   switchMap(params => {
    //     this.selectedLink = params.get('name');
    //     return this.service.getServices();
    //   })
    // );
  }
}
