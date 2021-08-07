
import { Component, OnInit, Input } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

import {AllServices} from '../services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [AllServices]
})
export class HomeComponent implements OnInit {

  constructor(private services: AllServices) { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 1
  }
  HomeSlides = [
    { id:1, src: "../../assets/banner/ARIEL_EDITING.jpg", title:'Ariel Editing' },
    { id:2, src: "../../assets/banner/background_remove_2.jpg", title:'Backgound Removal' },
    { id:3, src: "../../assets/banner/day_to_twilight.jpg", title:'Day to Twilight' },
    { id:4, src: "../../assets/banner/FLOOR_PLAN.jpg", title:'Floor Plan' },
    { id:5, src: "../../assets/banner/ITEM_REMOVEL.jpg", title:'Item Removel' },
  ];
  
  //HomeServices: string[] = [];

  HomeServices = this.services.services;

}
