import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { addToCart } from "../actions/cart.actions";
import CartModel from "../model/cart.model";
import { cartSelector } from "../selector/cart.selector";
import { CartState } from "../state/cart.state";

@Component({
    selector:"cart",
    templateUrl:"./cart.component.html"
})
export class CartComponent{
    _id:any;
    qty:any;
    records:CartModel[] = [];
    constructor(private route:ActivatedRoute,
                private store:Store<CartState>){
        this._id = this.route.snapshot.params["_id"];
        this.route.queryParams.subscribe((params)=>{
            this.qty = parseInt(params.qty);
        })

        console.log("_id",this._id, typeof this._id);
        console.log("qty",this.qty, typeof this.qty);

        this.store.select(cartSelector).subscribe((posRes:CartModel[] | any)=>{
            console.log(posRes);
            this.records = posRes;
        },(errRes)=>{
            console.log(errRes);
        })


    }

    ngOnInit(){
        this.store.dispatch(addToCart({"id":this._id,"qty":this.qty}))
    }


}