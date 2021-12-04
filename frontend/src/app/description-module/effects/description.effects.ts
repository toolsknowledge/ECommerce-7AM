import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { mergeMap,map, catchError } from "rxjs/operators";
import { description, descriptionFail, descriptionSuccess } from "../actions/description.action";
import DescriptionModel from "../model/description.model";
import { DescriptionService } from "../service/description.service";

@Injectable({
    providedIn:"root"
})
export class DescriptionEffects{
    constructor(private actions$:Actions,
                private service:DescriptionService){}

    description$ = createEffect(()=>this.actions$.pipe(
        ofType(description),
        mergeMap((action:any)=> this.service.getProductDetails(action._id).pipe(map((posRes:DescriptionModel)=>{
            return descriptionSuccess({"description":posRes})
        }),catchError((err:any)=>of(descriptionFail({"error":"Network Fail"})))))
    ))
}