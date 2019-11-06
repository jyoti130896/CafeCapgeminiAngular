export class CafeMenu {
    constructor (
        public itemId:number=null,
        public itemName:String="",
        public itemType:String="",
        public itemPrice:number=0
    ) {}
    public getItemdId() {
        return this.itemId;
    }
}