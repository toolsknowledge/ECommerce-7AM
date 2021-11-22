import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:"products",
    templateUrl:"./products.component.html"
})

export class ProductsComponent{
    @Input() products:any[];
    rate:any;
    max:any;
    constructor(private router:Router){
        this.products = [];
        this.rate=0;
        this.max=5;
    }
    
    navigateToDetailsScreen(id:any){
      
        this.router.navigate([`/details/${id}`]);
 
    }
}