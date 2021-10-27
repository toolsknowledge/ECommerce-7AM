import { createReducer, on } from "@ngrx/store";
import { ProductsList, ProductsListFail, ProductsListSuccess } from "../actions/product.actions";
import { ProductsListState } from "../state/product.state";



const initialState:ProductsListState = {
    loading:false,
    products:[],
    error:""
}

const _productReducer = createReducer(initialState,on(ProductsList,(state)=>{
    return{
        ...state,
        loading:false,
        products:[],
        error:""
    }
}),on(ProductsListSuccess,(state,action)=>{
    return{
        ...state,
        loading:true,
        products:action.products,
        error:""
    }
}),on(ProductsListFail,(state,action)=>{
    return{
        ...state,
        loading:true,
        products:[],
        error:action.error
    }
}));


export function ProductReducer(state:any,actions:any){
    return _productReducer(state,actions);
};