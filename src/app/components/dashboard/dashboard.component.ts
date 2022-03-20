import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCardModel } from '../../Models/product-card.model';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public products: ProductCardModel[] = [];
  constructor(
    @Inject(ProductService) private productService: ProductService,
    private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts('')
    .subscribe(response => this.products = response);
  }

  showDetails(id: number)
  {
    this.router.navigate([`/product/${id}`]);
  }
}
