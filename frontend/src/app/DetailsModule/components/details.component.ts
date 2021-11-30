import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { detailsLoading } from "../actions/details.actions";
import { detailsSelector } from "../selector/detail.selector";
import DetailState from "../state/detail.state";

@Component({
    selector:"app-details",
    templateUrl:"./details.component.html"
})

export class DetailsComponent{
    private id:any;
    constructor(private route:ActivatedRoute,
                private store:Store<DetailState>){
        this.id = this.route.snapshot.params["id"];
        console.log(this.id);
    }

    ngOnInit(){
        this.store.select(detailsSelector).subscribe((posRes)=>{
            //console.log(posRes);
            
        });

        this.store.dispatch(detailsLoading({"id":this.id}));
    }
}