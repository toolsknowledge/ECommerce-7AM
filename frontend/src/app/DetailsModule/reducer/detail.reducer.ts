import { createReducer, on } from "@ngrx/store";
import { detailsLoading, detailsLoadingFail, detailsLoadingSuccess } from "../actions/details.actions";
import DetailState from "../state/detail.state";

const initialState:DetailState = {
    loading:false,
    product:{_id:"",brand:"",cost:0,description:"",image:"",name:"",numReviews:0,rating:0},
    error:""
}

const _detailReducer = createReducer(initialState,on(detailsLoading,(state,action)=>{
    console.log("Hello......",action.id);
    return{
        ...state,
        loading:false,
        product:{_id:"",brand:"",cost:0,description:"",image:"",name:"",numReviews:0,rating:0},
        error:""
    }
}),on(detailsLoadingSuccess,(state,action)=>{
    return{
        ...state,
        loading:true,
        product:action.product,
        error:""
    }
}),on(detailsLoadingFail,(state,action)=>{
    return{
        ...state,
        loading:true,
        product:{_id:"",brand:"",cost:0,description:"",image:"",name:"",numReviews:0,rating:0},
        error:action.error
    }
}))

export function DetailReducer(state:any,actions:any){
    return _detailReducer(state,actions);
}