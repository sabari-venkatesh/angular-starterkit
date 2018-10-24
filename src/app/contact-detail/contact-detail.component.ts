import { Component, OnInit, Input } from '@angular/core';
import { LocationComponent } from '../location/location.component';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  @Input() location: LocationComponent;

  constructor() { }

  ngOnInit() {
  }

}
