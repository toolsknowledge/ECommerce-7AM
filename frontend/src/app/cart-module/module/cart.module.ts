import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { CartComponent } from "../components/cart.component";
import { CartEffects } from "../effects/cart.effects";
import { CartReducer } from "../reducer/cart.reducer";

@NgModule({
    declarations:[CartComponent],
    imports:[CommonModule,
             RouterModule.forChild([{path:"",component:CartComponent}]),
             HttpClientModule,
             EffectsModule.forFeature([CartEffects]),
             StoreModule.forFeature("cart",CartReducer)],
    providers:[],
    exports:[CartComponent]
})
export class CartModule{

}