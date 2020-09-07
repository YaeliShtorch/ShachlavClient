import { Time } from "@angular/common";

export class Order
{
 constructor(
        public  Id:number,  
        public CustomerId:number, 
        public SiteAdress:string,
        public OrderDate:Date,
        public OrderDueDate:Date,
        public StartTime:Time,
        public EndTime:Time,
        public IsApproved:boolean,
        public IsDone:boolean,
        public ManagerComment:string,
        public Comment:string,
        public ConcreteTest:boolean,
     
 ){}
    
}
   