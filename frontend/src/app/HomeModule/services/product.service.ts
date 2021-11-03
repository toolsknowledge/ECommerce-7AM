import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../model/product.model";
import { delay } from "rxjs/operators";
@Injectable({
    providedIn:"root"
})
export class ProductsService{
   constructor(private http:HttpClient){} 
   public getProducts():Observable<Product[]>{
      
       return this.http.get<Product[]>(`http://localhost:8080/api/products`);
   }
}