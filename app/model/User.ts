export class UserDetails {
    constructor (
        public userId:number=null,
        public userName:String="",
        public password:String=""
    ) {}

    public getUserID() {
        return this.userId;
    }
}