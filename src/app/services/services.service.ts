import { Injectable } from '@angular/core';
import { Service } from './service';
import { SERVICES } from './mock-services';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  constructor() { }

  getServices(): Observable<Service[]> {
    return of(SERVICES);
  }

  getService(name: string): Observable<Service> {
    return of(SERVICES.find(service => service.name === name));
  }
}
