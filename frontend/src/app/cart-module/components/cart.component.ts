import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector:"cart",
    templateUrl:"./cart.component.html"
})
export class CartComponent{
    _id:any;
    qty:any;
    constructor(private route:ActivatedRoute){
        this._id = this.route.snapshot.params["_id"];
        this.route.queryParams.subscribe((params)=>{
            this.qty = parseInt(params.qty);
        })


        console.log("_id",this._id, typeof this._id);
        console.log("qty",this.qty, typeof this.qty);
    }
}