import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "src/app/common/model/product.model";
@Injectable({
    providedIn:"root"
})
export class DetailsService{
    constructor(private http:HttpClient){}
    public getProductDetails(id:any):Observable<Product>{
        return this.http.get<Product>(`http://localhost:8080/api/products/${id}`);
    }
}