import { Product } from "../../common/model/product.model";

export interface ProductsListState{
    loading:boolean;
    products:Product[];
    error:string;
}