import { CafeDetails } from "./CafeDetails";

export class CafeMenu {
    constructor (
        public itemId:number=null,
        public itemName:String="",
        public itemType:String="",
        public itemPrice:number=0,
        public itemRating:number=0,
        public cafeDetails:CafeDetails[]=[]
    ) {}
    public getItemdId() {
        return this.itemId;
    }
}