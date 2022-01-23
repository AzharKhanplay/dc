
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { Location } from '@angular/common';

import { Service } from '../service';
import {AllServices} from '../services.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-services-details',
  templateUrl: './services-details.component.html',
  styleUrls: ['./services-details.component.scss']
})
export class ServicesDetailsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 1
  }

  service: Service | undefined;

  constructor(
    private route: ActivatedRoute,
    private readonly services: AllServices
  ) {
   }
  

  getService(){
    const route_ = String(this.route.snapshot.paramMap.get('url'));
    this.services.getService(route_)
    .subscribe(service => this.service = service);

  };

  ngOnInit() {
    //alert(this.route.snapshot.paramMap.get('url'));
    this.getService();
  };
};
