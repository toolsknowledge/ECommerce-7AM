import { Injectable } from "@angular/core";
import { Actions,createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { catchError, mergeMap,map, switchMap } from "rxjs/operators";
import { Product } from "src/app/common/model/product.model";
import { detailsLoading, detailsLoadingFail, detailsLoadingSuccess } from "../actions/details.actions";
import { DetailsService } from "../services/details.service";

@Injectable({
    providedIn:"root"
})

export class DetailsEffects{
    constructor(private actions$:Actions,
                private service:DetailsService
                
                ){}

    details$ = createEffect(()=>
        this.actions$.pipe(
            ofType(detailsLoading),
            mergeMap((action:any)=> this.service.getProductDetails("616e2ab8eaf7d9f188ce9181").pipe(map((posRes:Product)=>{
                console.log("Hello",action.id);
                return detailsLoadingSuccess({"product":posRes});
            }),catchError((error)=>of(detailsLoadingFail({"error":"Network Fail"})))))
        )
    );






    

}