import { Time } from "@angular/common";
import{MaterialTypeOrder} from '../Models/materialTypeOrder.models'
import { DateTime } from 'luxon';

export class Order
{
 constructor(
        public  Id:number,  
        public CustomerId:number, 
        public SiteAdress:string,
        public OrderDate:DateTime,
        public OrderDueDate:DateTime,
        public StartTime:DateTime,
        public EndTime:DateTime,
        public IsApproved:boolean,
        public IsDone:boolean,
        public ManagerComment:string,
        public Comment:string,
        public ConcreteTest:boolean,
        public MaterialOrderL:Array<MaterialTypeOrder>,
     
 ){}
    
}
   