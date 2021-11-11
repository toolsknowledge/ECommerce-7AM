import { Component,Input } from "@angular/core";
@Component({
    selector:"app-rating",
    templateUrl:"./rating.component.html"
})
export class RatingComponent{
    @Input() rating:number;
    @Input() numReviews:number;

    constructor(){
        this.rating = 0;
        this.numReviews = 0;
    }
    
};