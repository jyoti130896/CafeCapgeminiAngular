export class CafeDetails {
    constructor (
        public cafeId:number=null,
        public cafeName:String="",
        public cafeLocation:String="",
        public cafeRating:number=null
    ) {}

    public getCafeId() {
        return this.cafeId;
    }
}