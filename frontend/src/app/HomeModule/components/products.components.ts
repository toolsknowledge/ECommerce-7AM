import { Component } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { ProductsList } from "../actions/product.actions";
import { Product } from "../model/product.model";
import { productsListSelector } from "../selector/product.selector";
import { ProductsListState } from "../state/product.state";

@Component({
    selector:"products",
    templateUrl:"./products.component.html"
})

export class ProductsComponent{
    loading:boolean;
    products:Product[];
    error:string;
    constructor(private store:Store<ProductsListState>){
        this.loading = false;
        this.products = [];
        this.error = "";
    }
    
    ngOnInit(){
        this.store.select(productsListSelector).subscribe((posRes:ProductsListState)=>{
            const {loading,products,error} = posRes;
            // const [a,b] = ["Hello_1","Hello_2"];
            this.loading = loading;
            this.products = products;
            this.error = error;
        });
        this.store.dispatch(ProductsList());
    };



};