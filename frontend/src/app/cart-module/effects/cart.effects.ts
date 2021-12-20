import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { CartService } from "../service/cart.service";

@Injectable({
    providedIn:"root"
})
export class CartEffects{
    constructor(private actions:Actions,
                private service:CartService){}
}