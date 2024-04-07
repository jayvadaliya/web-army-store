import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  ngOnInit(): void {
    this.product = {
      id : 1,
      title : 'Watch',
      description : 'smart watch',
      price : 1099
    }
  }
}
