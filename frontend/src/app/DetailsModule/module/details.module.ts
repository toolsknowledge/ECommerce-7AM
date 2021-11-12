import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DetailsComponent } from "../components/details.component";

@NgModule({
    declarations:[DetailsComponent],
    imports:[CommonModule,HttpClientModule,RouterModule.forChild([{path:"",component:DetailsComponent}])],
    providers:[],
    exports:[DetailsComponent]
})
export class DetailsModule{}