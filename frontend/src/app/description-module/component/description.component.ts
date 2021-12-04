import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
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
    private _id:any = "";
    public loading:boolean;
    public description_product:DescriptionModel;
    public error:string;
    constructor(private route:ActivatedRoute,
                private store:Store<DescriptionState>){
        this._id = this.route.snapshot.params["_id"];
        this.loading = false;
        this.description_product = {_id:"",brand:"",cost:0,countInStock:0,description:"",image:"",name:"",numReviews:0,rating:0};
        this.error = "";
    }
    _subscription(){
        this.store.select(descriptionSelector).subscribe((posRes)=>{
            const {loading,description_product,error} = posRes;
            this.loading = loading;
            this.description_product = description_product;
            this.error = error;
        },(errRes)=>{
            console.log(errRes);
        })    
    }
    ngOnInit(){
        this.store.dispatch(description({_id:this._id})); 
        this._subscription();      
    }
}