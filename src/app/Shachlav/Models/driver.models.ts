export class Driver{

    // public get Id(): number {
    //     return this._Id;
    // }
    // public set Id(value: number) {
    //     this._Id = value;
    // }
    constructor(
        public Id: number,
        public IdentityNumber:string,
        public FirstName:string,
        public LastName:string,
        public Email:string,
        public PhoneNumber:string,
        public CellNumber:string, 
        public Address:String,
        public BirthDate:Date,
        public EntryToWorkDate:Date,
        public UserName:string,
        public Password:string,
        public IsActive:boolean

        ){}
}