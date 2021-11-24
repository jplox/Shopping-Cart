import { Component, OnInit , Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {
  @Input()productItem : Product
  @Input() cartItem : any


  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }

   handleAddToCart(){
     this.msg.sendMsg(this.productItem)  // sends the current item
   }
   
   
}
