import { Component, Inject, OnInit } from '@angular/core';
import { ProductCardModel } from '../Models/product-card.model';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public products: ProductCardModel[];
  constructor(@Inject(ProductService) private productService: ProductService) {
    this.products = [
      {
        id: 1,
        name: "Product1",
        description: "Description for product 1",
        imageUrl: "../../assets/dove1.jpg"
      },
      {
        id: 2,
        name: "Product2",
        description: "Description for product 2",
        imageUrl: "../../assets/dove1.jpg"
      },
      {
        id: 3,
        name: "Product3",
        description: "Description for product 3",
        imageUrl: "../../assets/dove.jpg"
      },
      {
        id: 4,
        name: "Product4",
        description: "Description for product 4",
        imageUrl: "../../assets/dove.jpg"
      }
    ]
  }

  ngOnInit(): void {
  }
}
