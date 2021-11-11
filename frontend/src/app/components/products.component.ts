import { Component, Input } from "@angular/core";

@Component({
    selector:"products",
    templateUrl:"./products.component.html"
})

export class ProductsComponent{
    @Input() products:any[];
    rate:any;
    max:any;
    constructor(){
        this.products = [];
        this.rate=0;
        this.max=5;
    }   
}