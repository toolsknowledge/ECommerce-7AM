import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import DescriptionModel from "../model/description.model";
@Injectable({
    providedIn:"root"
})
export class DescriptionService{
    constructor(private http:HttpClient){}
    public getProductDetails(id:any):Observable<DescriptionModel>{
        return this.http.get<DescriptionModel>(`http://localhost:8080/api/products/${id}`);
    }
}