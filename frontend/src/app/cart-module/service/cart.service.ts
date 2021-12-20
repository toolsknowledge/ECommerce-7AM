import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import CartModel from "../model/cart.model";
@Injectable({
    providedIn:"root"
})
export class CartService{
    constructor(private http:HttpClient){}
    public getProduct(id:any):Observable<CartModel>{
        return this.http.get<CartModel>(`http://localhost:8080/api/products/${id}`);
    }
}