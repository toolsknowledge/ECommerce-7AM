import { createAction, props } from "@ngrx/store";
import DescriptionModel from "../model/description.model";
import { DESCRIPTION, DESCRIPTION_FAIL, DESCRIPTION_SUCCESS } from "../types/description.types";
export const description = createAction(DESCRIPTION,props<{"_id":any}>());
export const descriptionSuccess = createAction(DESCRIPTION_SUCCESS,props<{"description":DescriptionModel}>());
export const descriptionFail = createAction(DESCRIPTION_FAIL,props<{"error":string}>());