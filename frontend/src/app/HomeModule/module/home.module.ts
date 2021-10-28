import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { ProductsComponent } from "../components/products.components";
import { ProductEffects } from "../effects/product.effects";
import { ProductReducer } from "../reducer/product.reducer";
import { ProductsService } from "../services/product.service";

@NgModule({
    declarations:[ProductsComponent],
    imports:[CommonModule,
             HttpClientModule,
             RouterModule.forChild([{path:"",component:ProductsComponent}]),
             EffectsModule.forFeature([ProductEffects]),
             StoreModule.forFeature("products",ProductReducer)],
    providers:[ProductsService],
    exports:[ProductsComponent]
})
export class HomeModule{}