import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { DetailsComponent } from "../components/details.component";
import { postEffects } from "../effects/product.effects";
import { DetailReducer } from "../reducer/detail.reducer";
import { DetailsService } from "../services/details.service";
@NgModule({
    declarations:[DetailsComponent],
    imports:[CommonModule,
             HttpClientModule,
             RouterModule.forChild([{path:"",component:DetailsComponent}]),
             EffectsModule.forFeature([postEffects]),
             StoreModule.forFeature("details",DetailReducer)],
    providers:[DetailsService],
    exports:[DetailsComponent]
})
export class DetailsModule{}