import { Component, OnInit } from '@angular/core';
import { Location } from './location';
import { LocationService } from './location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  locations: Location[];
  errorMessage: any;
  selectedLocation: Location;

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.getLocations();
    this.locationService.getLocations()
      .subscribe(
        locations => this.selectedLocation = locations[0],
        error => this.errorMessage = error
      );
  }

  onSelect(location: Location): void {
    this.selectedLocation = location;
  }

  getLocations(): void {
    this.locationService.getLocations()
      .subscribe(
        locations => this.locations = locations,
        error => this.errorMessage = error
      );
    console.log(this.errorMessage);
  }
}
