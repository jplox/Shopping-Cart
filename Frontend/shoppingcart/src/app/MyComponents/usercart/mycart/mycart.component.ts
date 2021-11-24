import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
  cartItems = [
    // {id:1 , productId:12, productName:"check",  qty:2 , price:10},
    // {id:2 ,productId:13, productName:"check1", qty:2 , price:50},
    // {id:3 ,productId:14, productName:"check2", qty:3 , price:100},
  ];

  cartTotal = 0; // intially cart  total is zero
  constructor(private msg:MessengerService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product: Product) =>{
      // console.log(product)
      this.addProductToCart(product)
    })     
  }
  
   addProductToCart(product: Product){
   let productExist = false;
   for(let i in this.cartItems){ // checking if the cart components contains repeated components
    if(this.cartItems[i].productId === product.id){
       this.cartItems[i].qty++  // incrementing the repeted items qty
       productExist = true;
       break;
    }
  }
   if(!productExist){
    this.cartItems.push({
      productId : product.id,
      productName: product.name,
      qty:1,
      price: product.price,
    })
   }
    this.cartTotal=0;
    this.cartItems.forEach(item =>{
      this.cartTotal +=  (item.qty * item.price)
    })

   }
     removeAllItem(){
       this.cartItems = []
     }
   }

