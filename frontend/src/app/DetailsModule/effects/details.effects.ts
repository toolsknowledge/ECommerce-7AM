import { Injectable } from "@angular/core";
import { Actions,createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, mergeMap,map } from "rxjs/operators";
import { Product } from "src/app/common/model/product.model";
import { detailsLoading, detailsLoadingFail, detailsLoadingSuccess } from "../actions/details.actions";
import { DetailsService } from "../services/details.service";

@Injectable({
    providedIn:"root"
})

export class DetailsEffects{
    constructor(private actions$:Actions,
                private service:DetailsService){}

    details$ = createEffect(()=>
        this.actions$.pipe(
            ofType(detailsLoading),
            mergeMap((action)=> this.service.getProductDetails(action.id).pipe(map((posRes:Product)=>{
                return detailsLoadingSuccess(posRes);
            }),catchError((error)=>of(detailsLoadingFail({"error":"Network Fail"})))))
        )
    );
    

}