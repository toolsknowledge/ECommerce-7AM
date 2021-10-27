import { Injectable } from "@angular/core";
import { Actions,createEffect, ofType } from "@ngrx/effects";
import { ProductsList, ProductsListFail, ProductsListSuccess } from "../actions/product.actions";
import { ProductsService } from "../services/product.service";
import { mergeMap,map,catchError } from "rxjs/operators";
import { Product } from "../model/product.model";
import { of } from "rxjs";
@Injectable({
    providedIn:"root"
})

export class ProductEffects{
    constructor(private actions$:Actions,
                private service:ProductsService){}

    products$ = createEffect(()=> this.actions$.pipe(
        ofType(ProductsList),
        mergeMap(()=> this.service.getProducts().pipe(map((posRes:Product[])=>{
            return ProductsListSuccess({"products":posRes})
        }),catchError((err)=>of(ProductsListFail({"error":"Network Fail"})))))
    ));
    
}