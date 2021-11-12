import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector:"app-details",
    templateUrl:"./details.component.html"
})

export class DetailsComponent{
    constructor(private route:ActivatedRoute){
        console.log( "id....",this.route.snapshot.params["id"] );
    }


}