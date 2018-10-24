import { Injectable } from '@angular/core';
import { Location } from './location';
import { LOCATIONS } from '../mocks/locations';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  getLocations(): Location[] {
    return LOCATIONS;
  }
}
