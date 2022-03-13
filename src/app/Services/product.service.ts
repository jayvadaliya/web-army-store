import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCardModel } from '../Models/product-card.model';

@Injectable()
export class ProductService {
    products: any = [];

    constructor(private http: HttpClient) {}

    getProducts() : Observable<any> {
        console.log("Started call")
        this.http.get("https://localhost:7087/Products")
        .subscribe(response =>
            this.products = response );

        return this.products;
    }
}