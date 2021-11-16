import { Product } from "src/app/common/model/product.model";

interface DetailState{
    loading:boolean;
    product:Product;
    error:string;
}

export default DetailState;