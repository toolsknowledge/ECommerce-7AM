import { createReducer, on } from "@ngrx/store";
import { description, descriptionFail, descriptionSuccess } from "../actions/description.action";
import DescriptionState from "../state/description.state";
const initialState:DescriptionState = {
    loading:false,
    description_product:{_id:"",brand:"",cost:0,countInStock:0,description:"",image:"",name:"",numReviews:0,rating:0},
    error:""
}
const _descriptionReducer = createReducer(initialState,on(description,(state)=>{
    return{
        ...state,
        loading:false,
        description_product:{_id:"",brand:"",cost:0,countInStock:0,description:"",image:"",name:"",numReviews:0,rating:0},
        error:""
    }
}),on(descriptionSuccess,(state,action)=>{
    return{
        ...state,
        loading:true,
        description_product:action.description,
        error:""
    }
}),on(descriptionFail,(state,action)=>{
    return{
        ...state,
        loading:false,
        description_product:{_id:"",brand:"",cost:0,countInStock:0,description:"",image:"",name:"",numReviews:0,rating:0},
        error:action.error  
    }
}));

export function descriptionReducer(state:any,action:any){
    return _descriptionReducer(state,action);
}