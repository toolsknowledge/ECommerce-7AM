import { Injectable } from "@angular/core";
import { Actions,createEffect, ofType } from "@ngrx/effects";
import { detailsLoading, detailsLoadingSuccess, detailsLoadingFail } from "../actions/details.actions";
import { DetailsService } from "../services/details.service";
import { mergeMap,map, catchError } from "rxjs/operators";

import { of } from "rxjs";
import { Product } from "src/app/common/model/product.model";
@Injectable({
    providedIn:"root"
})
export class postEffects{
    constructor(private service:DetailsService,
                private actions$:Actions){}
    public postEffect = createEffect(()=>this.actions$.pipe(
        ofType(detailsLoading),
        mergeMap((action:any)=>this.service.getProductDetails(action.id).pipe(map((posRes:Product)=>{
            console.log(action);
            return detailsLoadingSuccess({"product":posRes})
        }),catchError((err:any)=>of(detailsLoadingFail({"error":"Network Fail"})))))
    ))  
    
}