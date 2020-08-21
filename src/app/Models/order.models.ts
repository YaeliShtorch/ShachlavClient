import { Time } from "@angular/common";

export class Order
{
 constructor(
    public  Id:number,  
    public  CustomerId:number,
    public  OrderDueDate:Date,  
    public  OrderDate:Date,    
    public  OrderTime:Date,   
    public  Element:string, 
    public  SiteAdress:string, 
    public  ConcreteCheck:boolean, 
    public  PumpNeeded:boolean, 
    public  PumpType:string, 
    public  StartTime:Time,   
    public  EndTime:Time,
    public  IsIssue:boolean, 
    public  Status:boolean, 
    public  IsDone:boolean,
    public  State:string 
 ){}
    
}
   