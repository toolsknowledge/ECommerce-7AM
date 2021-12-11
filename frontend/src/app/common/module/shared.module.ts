import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoadingComponent } from "src/app/components/loading.component";
import { MessageComponent } from "src/app/components/message.component";
import { RatingComponent } from "src/app/components/rating.component";

@NgModule({
    declarations:[LoadingComponent,MessageComponent,RatingComponent],
    imports:[CommonModule],
    providers:[],
    exports:[LoadingComponent,MessageComponent,RatingComponent]
})
export class SharedModule{}