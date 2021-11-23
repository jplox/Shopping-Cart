import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-iteams',
  templateUrl: './cart-iteams.component.html',
  styleUrls: ['./cart-iteams.component.css']
})
export class CartIteamsComponent implements OnInit {
  @Input() cartItem : any
  constructor() { }

  ngOnInit(): void {
  }

}
