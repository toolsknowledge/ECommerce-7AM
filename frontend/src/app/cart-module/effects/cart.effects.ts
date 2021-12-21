import { Injectable } from "@angular/core";
import { Actions,createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { mergeMap,map, catchError } from "rxjs/operators";
import { addToCart, addToCartFail, addToCartSuccess } from "../actions/cart.actions";
import CartModel from "../model/cart.model";
import { CartService } from "../service/cart.service";

@Injectable({
    providedIn:"root"
})
export class CartEffects{
    constructor(private actions$:Actions,
                private service:CartService){}

    cart$ = createEffect(()=> this.actions$.pipe(
        ofType(addToCart),
        mergeMap((action:any)=> this.service.getProduct(action.id).pipe(map((posRes:CartModel)=>{
            return addToCartSuccess({"product":{...posRes,
                                                "qty":action.qty}})
        }),catchError((err)=>of(addToCartFail({"error":"Network Fail"})))))
    ))
}