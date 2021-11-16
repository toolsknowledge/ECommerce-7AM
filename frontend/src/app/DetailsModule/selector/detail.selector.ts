import { createFeatureSelector, createSelector } from "@ngrx/store";
import DetailState from "../state/detail.state";

export const detailsSelector = createSelector(createFeatureSelector<DetailState>("details"),(state)=>{
    return state;
})