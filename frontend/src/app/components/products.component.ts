import { Component, Input } from "@angular/core";

@Component({
    selector:"products",
    templateUrl:"./products.component.html"
})

export class ProductsComponent{
    @Input() products:any[];
    constructor(){
        this.products = [];
    }   
}