import { createAction, props } from "@ngrx/store";
import CartModel from "../model/cart.model";
import { ADD_CART, ADD_CART_FAIL, ADD_CART_SUCCESS } from "../types/cart.types";
export const addToCart = createAction(ADD_CART,props<{"qty":number}>());
export const addToCartSuccess = createAction(ADD_CART_SUCCESS,props<{"product":CartModel}>());
export const addToCartFail = createAction(ADD_CART_FAIL,props<{"error":string}>());