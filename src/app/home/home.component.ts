
import { Component, OnInit, Input } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss',
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

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
  ]
  
  HomeServices = [
    { id:1, route:'/', title:'IMAGE ENHANCEMENT', thumb:'https://d1dbtne32ilur4.cloudfront.net/img/categories/imageEnhancement.jpg?v=1', description:'Perfect for real estate photo editing so you can present your listing with top-notch, retouched professional-looking photos.' },
    { id:2, route:'/', title:'VIRTUAL STAGING', thumb:'https://d1dbtne32ilur4.cloudfront.net/img/categories/virtualFurniture.jpg', description:'Our team can add furniture to real estate photography to show potential buyers just how versatile the space is.' },
   
    { id:3, route:'/', title:'DAY TO DUSK', thumb:'https://d1dbtne32ilur4.cloudfront.net/img/categories/dayToDusk.jpg', description:'Our photo retouching service will take your exterior property photo from drab to fab by replacing your sky with a beautiful dusk setting.' },

    { id:4, route:'/', title:'ITEM REMOVAL', thumb:'https://d1dbtne32ilur4.cloudfront.net/img/categories/itemRemoval.jpg', description:'Our photo editing experts can remove unwanted items from your photos.' },

    { id:5, route:'/', title:'FLOOR PLAN REDRAWS', thumb:'https://d1dbtne32ilur4.cloudfront.net/img/categories/floorPlansB.jpg', description:'Clearly showcase your listing to potential buyers with an online floorplan available in a range of 2D and 3D options.' },

    { id:6, route:'/', title:'360° IMAGE ENHANCEMENT', thumb:'https://d1dbtne32ilur4.cloudfront.net/img/categories/360ImageEnhancement.jpg', description:'Present your listing with high-quality, retouched and professional 360° images.' }

   // { id:1, route:'/', title:'', thumb:'', description:'' }

  ]

}
