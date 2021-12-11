import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { HomeComponent } from "../components/home.components";
import { ProductEffects } from "../effects/product.effects";
import { ProductReducer } from "../reducer/product.reducer";
import { ProductsService } from "../services/product.service";
import { ProductsComponent } from "src/app/components/products.component";
import { SharedModule } from "src/app/common/module/shared.module";

@NgModule({
    declarations:[HomeComponent,
                  ProductsComponent
                  ],
    imports:[CommonModule,
             HttpClientModule,
             RouterModule.forChild([{path:"",component:HomeComponent}]),
             EffectsModule.forFeature([ProductEffects]),
             StoreModule.forFeature("products",ProductReducer),
             SharedModule
             ],
    providers:[ProductsService],
    exports:[HomeComponent]
})
export class HomeModule{}