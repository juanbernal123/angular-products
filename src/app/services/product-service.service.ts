import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  url = "https://jsonplaceholder.typicode.com/posts";

  getProducts() {
    return this.http.get<Product[]>(this.url);
  }
}
