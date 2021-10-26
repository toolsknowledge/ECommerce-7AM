import { Injectable } from "@angular/core";
import { Actions,createEffect, ofType } from "@ngrx/effects";
import { ProductsLoading, ProductsLoadingFail, ProductsLoadingSuccess } from "../HomeModule/actions/product.actions";
import { ProductsService } from "../HomeModule/services/product.service";
import { catchError, mergeMap,map } from "rxjs/operators";
import { Product } from "../HomeModule/model/product.model";
import { of } from "rxjs";
@Injectable({
    providedIn:"root"
})
export class ProductsEffects{
    constructor(private actions$:Actions,
                private service:ProductsService){}
    
    products$ = createEffect(()=> this.actions$.pipe(
        ofType(ProductsLoading),
        mergeMap(()=>{
            return this.service.getProducts().pipe(map((posRes:Product[])=>{
                return ProductsLoadingSuccess({"products":posRes})
            }),catchError((err)=> of(ProductsLoadingFail({"error":"Network Error"}))));
        })
    ))
}