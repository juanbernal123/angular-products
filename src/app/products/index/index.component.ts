import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { ProductServiceService } from "../../services/product-service.service";

@Component({
  selector: 'products-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  products!: Product[];

  constructor(private ProductServiceService: ProductServiceService) { }

  ngOnInit(): void {

    this.ProductServiceService.getProducts()
      .subscribe(data => {
        this.products = data;
      })
  }
}
