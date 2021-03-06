import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPageName();
  }

  getPageName(){
    const route_ = String(this.route.snapshot.queryParamMap.get('name'));
    return JSON.stringify(route_);
  }

}
