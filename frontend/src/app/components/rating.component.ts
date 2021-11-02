import { Component,Input } from "@angular/core";
@Component({
    selector:"rating",
    templateUrl:"./rating.component.html"
})
export class RatingComponent{
    @Input() rating:number = 0;
    @Input() numReviews:number = 0;

  
};