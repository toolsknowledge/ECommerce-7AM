import { createFeatureSelector, createSelector } from "@ngrx/store";
import DescriptionState from "../state/description.state";

export const descriptionSelector = createSelector(createFeatureSelector<DescriptionState>("description"),(state)=>{
    return state;
});