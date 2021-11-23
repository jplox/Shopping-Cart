import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {
   productsList : Product[] = []
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    // this.productService.getProducts() // getting all the products
    this.productsList = this.productService.getProducts()
  }

}
