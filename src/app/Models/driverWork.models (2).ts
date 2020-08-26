import { Time } from "@angular/common";

export class DriverWork{
    constructor(
      
        public  DriverId:number,
        // public  Driver??
        public  OrderId:number, 
        // public  Order ??
        public  VehicleId:number, 
        // public  Vehicle??
        public  StartTime:Time,
        public  EndTime :Time,
     
        public  Date:Date, 
        public  Amount:number

        
    ){}
}
       
      