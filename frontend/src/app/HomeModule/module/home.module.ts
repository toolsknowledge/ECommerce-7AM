import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from "../components/home.components";
import { ProductEffects } from "../effects/product.effects";
import { ProductReducer } from "../reducer/product.reducer";
import { ProductsService } from "../services/product.service";
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProductsComponent } from "src/app/components/products.component";
import { LoadingComponent } from "src/app/components/loading.component";
import { MessageComponent } from "src/app/components/message.component";
import { BarRatingModule } from "ngx-bar-rating";
import { RatingComponent } from "src/app/components/rating.component";

@NgModule({
    declarations:[HomeComponent,
                  ProductsComponent,
                  LoadingComponent,
                  MessageComponent,
                  RatingComponent],
    imports:[CommonModule,
             HttpClientModule,
             RouterModule.forChild([{path:"",component:HomeComponent}]),
             EffectsModule.forFeature([ProductEffects]),
             StoreModule.forFeature("products",ProductReducer),
            //  BarRatingModule,
            //  NgxSpinnerModule,
             ],
    providers:[ProductsService],
    exports:[HomeComponent,LoadingComponent]
})
export class HomeModule{}