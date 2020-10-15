import { DatePipe } from '@angular/common';
import { DateTime } from 'luxon';
import { materialTypeOrderViewDTO } from './MaterialTypeOrderView.models';

export class orderViewDTO{
    constructor(
        public Id:number,
        public CustomerName:string,
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
        public MaterialOrderL:Array<materialTypeOrderViewDTO>,
        )
{}
    
}
 