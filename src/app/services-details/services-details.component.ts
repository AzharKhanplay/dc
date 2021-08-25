import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { Location } from '@angular/common';

import { Service } from '../service';
import {AllServices} from '../services.service';

@Component({
  selector: 'app-services-details',
  templateUrl: './services-details.component.html',
  styleUrls: ['./services-details.component.scss']
})
export class ServicesDetailsComponent implements OnInit {
  service: Service | undefined;

  constructor(
    private route: ActivatedRoute,
    private services: AllServices
  ) {
   }

  ngOnInit() {
    //alert(this.route.snapshot.paramMap.get('url'));
    this.getService();
  }
  
  getService(){
    const route_ = String(this.route.snapshot.paramMap.get('url'));
    this.services.getService(route_)
    .subscribe(service => this.service = service);
    //alert(this.service);
  };

  handleClick(){
    //alert(this.service?.title);
    this.getService();
  }
  

}
