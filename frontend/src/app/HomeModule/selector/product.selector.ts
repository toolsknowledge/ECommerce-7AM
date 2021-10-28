import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductsListState } from "../state/product.state";

export const productsListSelector = createSelector(createFeatureSelector<ProductsListState>("products"),(state)=>{
    return state;
})