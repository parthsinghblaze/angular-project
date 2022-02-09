import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(public activeRoute:ActivatedRoute) { }
  public selectID: any;

    ngOnInit(): void {
      this.selectID = this.activeRoute.snapshot.paramMap.get("pid");
      
      
     
  }

}
