import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ServicesService } from '../services.service';
import { Observable } from 'rxjs';
import { Service } from '../service';

@Component({
  selector: 'app-services-detail',
  templateUrl: './services-detail.component.html',
  styleUrls: ['./services-detail.component.css']
})
export class ServicesDetailComponent implements OnInit {

  service$: Observable<Service>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ServicesService
  ) { }

  ngOnInit() {
    this.service$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getService(params.get('name')))
    );
    console.log(this.service$);
  }

}
