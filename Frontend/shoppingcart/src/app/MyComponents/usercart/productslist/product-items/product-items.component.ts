import { Component, OnInit , Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {
  @Input()productItem : Product

  constructor() { }

  ngOnInit(): void {
  }

}
