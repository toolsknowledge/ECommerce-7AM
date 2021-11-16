import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/common/model/product.model";
import { DETAILS_LOADING, DETAILS_LOADING_FAIL, DETAILS_LOADING_SUCCESS } from "../types/details.types";
export const detailsLoading = createAction(DETAILS_LOADING,props<{"id":any}>());
export const detailsLoadingSuccess = createAction(DETAILS_LOADING_SUCCESS,props<{"product":Product}>());
export const detailsLoadingFail = createAction(DETAILS_LOADING_FAIL,props<{"error":string}>());