import { Component, Input } from "@angular/core";

@Component({
    selector:"alert-component",
    templateUrl:"./message.component.html"
})
export class MessageComponent{
    @Input() variant="";
    @Input() message="";
}