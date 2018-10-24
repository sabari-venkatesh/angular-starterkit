import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location as ngLocation } from '@angular/common';
import { Location } from '../location';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent implements OnInit {

  location: Location;

  constructor(
    private route: ActivatedRoute,
    private locationService: LocationService,
    private loc: ngLocation
  ) { }

  ngOnInit() {
    this.getLocation();
  }

  goBack(): void {
    this.loc.back();
  }

  getLocation(): void {
    const city = this.route.snapshot.paramMap.get('city');
    this.locationService.getLocation(city)
      .subscribe(
        location => this.location = location
      );
  }
}
