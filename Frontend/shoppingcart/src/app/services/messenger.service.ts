import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  subject = new Subject();

  constructor() { }

  sendMsg(product){
    // called from products-items
    this.subject.next(product) // triggering an event
  }

  getMsg(){
  // called from cart
  return this.subject.asObservable()
  }

  
}
