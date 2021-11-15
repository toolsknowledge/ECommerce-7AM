import { createAction, props } from "@ngrx/store";
import { Product } from "../../common/model/product.model";
import { PRODUCTS_LIST, PRODUCTS_LIST_FAIL, PRODUCTS_LIST_SUCCESS } from "../types/product.types";

export const ProductsList = createAction(PRODUCTS_LIST);
export const ProductsListSuccess = createAction(PRODUCTS_LIST_SUCCESS,props<{"products":Product[]}>());
export const ProductsListFail = createAction(PRODUCTS_LIST_FAIL,props<{"error":string}>());