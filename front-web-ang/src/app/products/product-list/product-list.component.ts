import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  public products: Product[];

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(
        products => {
          this.products = products;               
        },
        error => console.log(error)        
      )
  }

}
