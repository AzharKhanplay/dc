import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SERVICES } from './mock-services';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})

export class AllServices {
  constructor() { }

  getServices(): Observable<Service[]> {
   const services = of(SERVICES);
   return services;
  }

  getService(route_: String): Observable<Service> {
    const service = SERVICES.find(s => s.route === route_)!;
    //alert(service);
    return of(service);
  }

}
