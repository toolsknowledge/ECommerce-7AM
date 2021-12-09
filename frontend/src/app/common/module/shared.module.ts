import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoadingComponent } from "src/app/components/loading.component";
import { RatingComponent } from "src/app/components/rating.component";

@NgModule({
    declarations:[LoadingComponent],
    imports:[CommonModule],
    providers:[],
    exports:[LoadingComponent]
})
export class SharedModule{}