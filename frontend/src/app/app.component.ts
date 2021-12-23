import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { cartSelector } from './cart-module/selector/cart.selector';
import { CartState } from './cart-module/state/cart.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'frontend';
    cartItems:number = 0;
    constructor(private store:Store<CartState>){
      this._subscription();
    }

    _subscription = ()=>{
        this.store.select(cartSelector).subscribe((posRes)=>{
          
          if(posRes!=undefined){
            const {CartItems}  = posRes;
            this.cartItems = CartItems.length;
          }else{
              this.cartItems = 0;
          }
        },(errRes)=>{
          console.log(errRes);
        });
    }
}
