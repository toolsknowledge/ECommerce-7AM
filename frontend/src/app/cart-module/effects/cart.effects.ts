import { Injectable } from "@angular/core";
import { Actions,createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { mergeMap,map, catchError } from "rxjs/operators";
import { addToCart, addToCartFail, addToCartSuccess } from "../actions/cart.actions";
import CartModel from "../model/cart.model";
import { cartSelector } from "../selector/cart.selector";
import { CartService } from "../service/cart.service";
import { CartState } from "../state/cart.state";

@Injectable({
    providedIn:"root"
})
export class CartEffects{
    constructor(private actions$:Actions,
                private service:CartService,
                private store:Store<CartState>){}

    cart$ = createEffect(()=> this.actions$.pipe(
        ofType(addToCart),
        mergeMap((action:any)=> this.service.getProduct(action.id).pipe(map((posRes:CartModel)=>{
            this.store.select(cartSelector).subscribe((posRes)=>{
                //console.log("PosRes....",posRes.CartItems);
            },(errRes)=>{
                console.log(errRes);
            });
            return addToCartSuccess({"product":{...posRes,
                                                "qty":action.qty}})
        }),catchError((err)=>of(addToCartFail({"error":"Network Fail"})))))
    ))
}