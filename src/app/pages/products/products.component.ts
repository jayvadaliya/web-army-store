import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  
  products:any[] = [];
  selectedProduct: any;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
      this.products = [
        {
          id : 1,
          title : 'Watch',
          description : 'smart watch',
          price : 1099
        } ,
        {
          id : 2,
          title : 'Mobile',
          description : 'smart phone',
          price : 10999
        } ,
        {
          id : 3,
          title : 'Bluetooth ',
          description : 'bluetooth speaker',
          price : 3099
        }, 
        {
          id : 4,
          title : 'Laptop',
          description : 'vivobook',
          price : 31099
        }
      ]
  }

  getProductDetail(productId: number) {
    
    }

  deleteProduct(productId: number) {
    this.products.splice(this.products.findIndex(x => x.id === productId), 1);
  }
}
