import { Component, Inject, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCardModel } from 'src/app/Models/product-card.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: ProductCardModel | undefined;

  constructor(
    @Inject(ProductService) private productService: ProductService,
    @Inject(ActivatedRoute) private route: ActivatedRoute) { }

  ngOnInit(): void {
    let productId = Number(this.route.snapshot.paramMap.get('id'));
    this.getProductDetail(productId);
  }

  getProductDetail(id: number)
  {
    this.productService.getProductById(id)
    .subscribe(response => this.product = response);
  }
}
