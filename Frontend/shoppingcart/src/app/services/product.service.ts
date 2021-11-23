import { Injectable } from '@angular/core';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // array of products
  products: Product[] = [
    new Product( 1 , "product-1" , "this is product one desc . the product is good" , 100),
    new Product( 2 , "product-2" , "this is product two desc . the product is good" , 200),
    new Product( 3 , "product-3" , "this is product three desc . the product is good" , 300),
    new Product( 4 , "product-4" , "this is product four desc . the product is good" , 400),
    new Product( 5 , "product-5" , "this is product five desc . the product is good" , 500)
  ]
  constructor() { }
  
  //TODO populate products from database and return an observable
  getProducts() : Product[]{
    return this.products
  }
}
