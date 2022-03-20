import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCardModel } from '../Models/product-card.model';

@Injectable()
export class ProductService {
    products: ProductCardModel[] = [];
    url: string = "https://localhost:7087/Products";

    constructor(private http: HttpClient) {}

    getProducts(searchTerm: string) : Observable<ProductCardModel[]> {
        return this.http.get<ProductCardModel[]>(this.url, {
            params: {
                searchTerm: searchTerm,
            }});
    }

    getProductById(id: number) : Observable<ProductCardModel> {
        return this.http.get<ProductCardModel>(this.url + `/${id}`);
    }
}