
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ReviewsCarouselOptions: OwlOptions = {
    loop: true,
    nav: false,
    dots: true,
    responsive:{
      0:{items:1},
      767:{items:2},
      992:{items:3},
    }
  }

  Reviews = [
    { id:1, name:'Jeff Wu ', location:'United State', rating:5, content:'The virtual staging and photo enhancements were phenomenal. The turnaround was impossibly fast. I received my enhanced photos with virtual staging in less than 12 hours. I selected modern furniture and decor for the staging, and they nailed it. Our Condo is the #1 viewed rental property on Zillow right now, by 7 fold!'  },
    { id:2, name:'Kim Gabel ', location:'Austrelia', rating:5, content:'I was blown away (as were my friends) by the virtual staging I used for my property. Outstanding support, response and turnaround time, which was much quicker than the guaranteed 24-48 hours. Can’t give enough stars.'  },
    { id:3, name:'Michelle Harrison', location:'United State', rating:5, content:'Incredibly polite and helpful. They are really great about their customer care. There are lots of companies who provide similar service, but BoxBrownie is the most realistic and user friendly website.'  },
    { id:4, name:'Tia Bergeron', location:'Russia', rating:5, content:'User friendly cloud based software! Great customer service. Quick turn-around with desired results. Highly recommend and will be using again!'  },

  ]

}
