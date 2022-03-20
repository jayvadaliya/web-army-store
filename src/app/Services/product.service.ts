import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCardModel } from '../Models/product-card.model';

@Injectable()
export class ProductService {
    products: ProductCardModel[] = [];

    constructor(private http: HttpClient) {}

    getProducts() : Observable<ProductCardModel[]> {
        return this.http.get<ProductCardModel[]>("https://localhost:7087/Products");
    }

    getProductById(id: number) : Observable<ProductCardModel> {
        return this.http.get<ProductCardModel>(`https://localhost:7087/Products/${id}`);
    }
}