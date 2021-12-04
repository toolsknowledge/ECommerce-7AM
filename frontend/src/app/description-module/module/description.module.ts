import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { LoadingComponent } from "src/app/components/loading.component";
import { HomeModule } from "src/app/HomeModule/module/home.module";
import { DescriptionComponent } from "../component/description.component";
import { DescriptionEffects } from "../effects/description.effects";
import { descriptionReducer } from "../reducer/description.reducer";
import { DescriptionService } from "../service/description.service";

@NgModule({
    declarations:[DescriptionComponent],
    imports:[CommonModule,
            HomeModule,
             RouterModule.forChild([{path:"",component:DescriptionComponent}]),
             HttpClientModule,
             EffectsModule.forFeature([DescriptionEffects]),
             StoreModule.forFeature("description",descriptionReducer)],
    providers:[DescriptionService],
    exports:[DescriptionComponent]
})
export class DescriptionModule{}