import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "src/app/common/module/shared.module";
import { DescriptionComponent } from "../component/description.component";
import { DescriptionEffects } from "../effects/description.effects";
import { descriptionReducer } from "../reducer/description.reducer";
import { DescriptionService } from "../service/description.service";

@NgModule({
    declarations:[DescriptionComponent],
    imports:[CommonModule,
             SharedModule,
             FormsModule,
             RouterModule.forChild([{path:"",component:DescriptionComponent}]),
             HttpClientModule,
             EffectsModule.forFeature([DescriptionEffects]),
            StoreModule.forFeature("description",descriptionReducer)],
    providers:[DescriptionService],
    exports:[DescriptionComponent]
})
export class DescriptionModule{}