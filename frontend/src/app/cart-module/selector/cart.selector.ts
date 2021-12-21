import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "../state/cart.state";

export const cartSelector = createSelector(createFeatureSelector<CartState>("cart"),(state)=>{
    return state;
})