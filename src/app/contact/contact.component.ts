import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  locations = [
    { city: 'chennai', phone: '(+91) 44-3061-2100' },
    { city: 'oslo', phone: '(+47) 479-69-013' },
    { city: 'manila', phone: '632 844-1753' }
  ];
  selectedLocation: ContactComponent;

  constructor() { }

  ngOnInit() {
  }

  onSelect(location: ContactComponent): void {
    this.selectedLocation = location;
  }
}
