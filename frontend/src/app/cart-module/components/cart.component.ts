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
    danger:any;
    empty_message:any;
    records1:any[];
    constructor(private route:ActivatedRoute,
                private store:Store<CartState>){
        this.danger = "danger";
        this.empty_message = "cart item empty";
        this._id = this.route.snapshot.params["_id"];
        this.route.queryParams.subscribe((params)=>{
            this.qty = parseInt(params.qty);
        })
  

        this.store.select(cartSelector).subscribe((posRes:CartModel[] | any)=>{
            this.records = posRes;
            const { CartItems } = posRes;
            
            this.records = CartItems;
        
            console.log(this.records);

            
            
                this.records1 = CartItems.map((element:any,index:any)=>{
                    if(Object.keys(element).includes("countInStock")){
                        return [...Array(element.countInStock).keys()]
                    }else{
                        return element;
                    }
                })
            
                console.log(this.records1);


        
        },(errRes)=>{
            console.log(errRes);
        })


    }   

    ngOnInit(){
        this.store.dispatch(addToCart({"id":this._id,"qty":this.qty}))
    }


}