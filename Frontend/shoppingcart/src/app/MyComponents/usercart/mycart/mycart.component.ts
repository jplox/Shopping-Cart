import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
  cartItems = [
    {id:1 , productId:12, productName:"check",  qty:2 , price:10},
    {id:2 ,productId:13, productName:"check1", qty:2 , price:50},
    {id:3 ,productId:14, productName:"check2", qty:3 , price:100},
  ];

  cartTotal = 0; // intially cart  total is zero
  constructor() { }

  ngOnInit(): void {
    this.cartItems.forEach(item =>{
      this.cartTotal +=  (item.qty * item.price)
    })
  }

}
