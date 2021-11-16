import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { DetailsComponent } from "../components/details.component";
import { DetailsEffects } from "../effects/details.effects";
import { DetailReducer } from "../reducer/detail.reducer";

@NgModule({
    declarations:[DetailsComponent],
    imports:[CommonModule,
             HttpClientModule,
             RouterModule.forChild([{path:"",component:DetailsComponent}]),
             EffectsModule.forFeature([DetailsEffects]),
             StoreModule.forFeature("details",DetailReducer)],
    providers:[],
    exports:[DetailsComponent]
})
export class DetailsModule{}