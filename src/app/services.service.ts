import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllServices {

  constructor() { }
   
  services = [
    { id:1, route:'/image-enhancement/', title:'IMAGE ENHANCEMENT', thumb:'https://d1dbtne32ilur4.cloudfront.net/img/categories/imageEnhancement.jpg?v=1', description:'Perfect for real estate photo editing so you can present your listing with top-notch, retouched professional-looking photos.' },
    { id:2, route:'/virtual-staging/', title:'VIRTUAL STAGING', thumb:'https://d1dbtne32ilur4.cloudfront.net/img/categories/virtualFurniture.jpg', description:'Our team can add furniture to real estate photography to show potential buyers just how versatile the space is.' },
   
    { id:3, route:'/day-to-dusk/', title:'DAY TO DUSK', thumb:'https://d1dbtne32ilur4.cloudfront.net/img/categories/dayToDusk.jpg', description:'Our photo retouching service will take your exterior property photo from drab to fab by replacing your sky with a beautiful dusk setting.' },

    { id:4, route:'/item-removal/', title:'ITEM REMOVAL', thumb:'https://d1dbtne32ilur4.cloudfront.net/img/categories/itemRemoval.jpg', description:'Our photo editing experts can remove unwanted items from your photos.' },

    { id:5, route:'/floor-plan-redraws/', title:'FLOOR PLAN REDRAWS', thumb:'https://d1dbtne32ilur4.cloudfront.net/img/categories/floorPlansB.jpg', description:'Clearly showcase your listing to potential buyers with an online floorplan available in a range of 2D and 3D options.' },

    { id:6, route:'/360-image-enhancement/', title:'360° IMAGE ENHANCEMENT', thumb:'https://d1dbtne32ilur4.cloudfront.net/img/categories/360ImageEnhancement.jpg', description:'Present your listing with high-quality, retouched and professional 360° images.' },
    
    { id:7, route:'/360-VIRTUAL-STAGING/', title:'360° VIRTUAL STAGING', thumb:'https://d1dbtne32ilur4.cloudfront.net/img/categories/360VirtualStaging.jpg', description:'Our team of expert editors can add realistic furniture to 360° images to bring to life a previously bare listing.' },

    { id:8, route:'/VIRTUAL-RENOVATIONS/', title:'VIRTUAL RENOVATIONS', thumb:'https://d1dbtne32ilur4.cloudfront.net/img/categories/virtualRenovations.jpg', description:'Visualize what a design will look like before undertaking expensive renovations.' },

   // { id:1, route:'/', title:'', thumb:'', description:'' }
   
  ];

}
