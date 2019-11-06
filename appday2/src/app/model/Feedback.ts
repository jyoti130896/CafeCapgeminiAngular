import { CafeMenu } from "./CafeMenu";
import { UserDetails } from "./User";

export class Feedback {
    constructor (
        public ratingId:number=null,
        public review:String="",
        public rating:String="",
        public item:CafeMenu[]=[],
        public users:UserDetails[]=[]
       
    ) {}
    public getRatingId() {
        return this.ratingId;
    }
}