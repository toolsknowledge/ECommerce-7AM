import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { description } from "../actions/description.action";
import DescriptionModel from "../model/description.model";
import { descriptionSelector } from "../selector/description.selector";
import DescriptionState from "../state/description.state";
@Component({
    selector:"description",
    templateUrl:"./description.component.html"
})
export class DescriptionComponent{
    private _id:any;
    loading:boolean;
    error:string;
    product:DescriptionModel;
    danger:string = "danger";
    list:Array<number>;
    x:number;

    qty:number;
    constructor(private store:Store<DescriptionState>,
                private _route:ActivatedRoute,
                private router:Router){
        
        this._id = this._route.snapshot.params["_id"];
        this.loading = false;
        this.product = {brand:"",cost:0,countInStock:0,image:"",name:"",numReviews:0,rating:0,_id:"",description:""};
        this.error = "";
        this.list = [0];
        this.x=0;
        this.qty=1;
    }

    _subscription(){
        this.store.select(descriptionSelector).subscribe((posRes)=>{
            const {loading,description_product,error} = posRes;
            this.loading = loading;
            this.product = description_product;
            this.error = error;
            this.list = [...Array(this.product.countInStock).keys()];
            
        },(errRes)=>{
            console.log(errRes);
        })
    }

    _dispatch(){
        this.store.dispatch(description({_id:this._id}));
    }

    ngOnInit(){
        this._dispatch();
        this._subscription();
    }

    addToHandler(_id:any){
        this.router.navigate([`/cart/${_id}`],{queryParams:{'qty':this.qty}})
        
    }

}

