import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.less']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  services = [
    {id:1, title:'IMAGE ENHANCEMENT', url:'', thumb:'imageEnhancement.jpg', price:'1.5', curr:'US$', content:'Perfect for real estate photo editing so you can present your listing with top-notch, retouched professional-looking photos.' },
    {id:2, title:'IMAGE ENHANCEMENT', url:'', thumb:'imageEnhancement.jpg', price:'1.5', curr:'US$', content:'Perfect for real estate photo editing so you can present your listing with top-notch, retouched professional-looking photos.' }
  ]

}
