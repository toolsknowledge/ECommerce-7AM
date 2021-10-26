import { createAction, props } from "@ngrx/store";
import { PRODUCTS_LOADING, PRODUCTS_LOADING_FAIL, PRODUCTS_LOADING_SUCCESS } from "../types/product.types";
import {Product} from "../model/product.model";
export const ProductsLoading = createAction(PRODUCTS_LOADING);
export const ProductsLoadingSuccess = createAction(PRODUCTS_LOADING_SUCCESS,props<{"products":Product[]}>());
export const ProductsLoadingFail = createAction(PRODUCTS_LOADING_FAIL,props<{"error":string}>());