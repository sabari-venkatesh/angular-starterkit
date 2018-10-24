import { Component, OnInit } from '@angular/core';
import { Location } from './location';
import { LocationService } from './location.service';

@Component({
  selector: 'app-contact',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  locations: Location[];
  selectedLocation: LocationComponent;

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.getLocations();
  }

  onSelect(location: LocationComponent): void {
    this.selectedLocation = location;
  }

  getLocations(): void {
    this.locations = this.locationService.getLocations();
  }
}
