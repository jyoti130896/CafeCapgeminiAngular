export class Feedback {
    constructor (
        public ratingId:number=null,
        public review:String="",
        public rating:String="",
        public feedbackType=""
    ) {}
    public getRatingId() {
        return this.ratingId;
    }
}