import DescriptionModel from "../model/description.model";

interface DescriptionState{
    loading:boolean;
    description_product:DescriptionModel;
    error:string;
}
export default DescriptionState;