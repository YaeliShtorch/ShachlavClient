import { Time } from "@angular/common";

export class Order
{
 constructor(
    public  Id:number,  
    public  CustomerId:number,  
    public  OrderDate:Date,       
    public  Element:string, 
    public  SiteAdress:string, 
    public  ConcreteCheck:boolean, 
    public  PumpNeeded:boolean, 
    public  PumpId:number, 
    public  StartTime:Time,   
    public  EndTime:Time,
    public  IsIssue:boolean, 
    public  Status:boolean, 
    public  IsDone:boolean,
    public  State:string 
 ){}
    
}
   