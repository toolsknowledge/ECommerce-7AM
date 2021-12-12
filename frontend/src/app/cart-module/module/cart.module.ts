import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CartComponent } from "../components/cart.component";

@NgModule({
    declarations:[CartComponent],
    imports:[CommonModule,RouterModule.forChild([{path:"",component:CartComponent}])],
    providers:[],
    exports:[CartComponent]
})
export class CartModule{

}