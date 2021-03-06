import { createReducer, on } from "@ngrx/store";
import { addToCartSuccess } from "../actions/cart.actions";
import { CartState } from "../state/cart.state";

const initialState:CartState = {
    CartItems:[]
}

const _cartReducer = createReducer(initialState,on(addToCartSuccess,(state:any,action:any)=>{
    const item = action.product;
    const id = action.id;
    const existedItem = initialState.CartItems.findIndex((element:any,index:any)=>{ 
        return element._id === id;
    });
    if(existedItem!=-1){
        return{
            ...state,
            CartItems:state.CartItems.map((element:any,index:any)=>{
                return element._id === id?item:element
            })
        }
    }else{
        return{
            ...state,
            CartItems:[...state.CartItems,item]
        }
    }
}));

export function CartReducer(state:any,action:any){
    return _cartReducer(state,action);
}

