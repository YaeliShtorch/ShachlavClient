import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import {ValidationService} from 'src/app/Shachlav/Services/validation.service'
import { DriverWork } from 'src/app/Shachlav/Models/driverWork.models'
import { Vehicle } from 'src/app/Shachlav/Models/vehicle.models';
import { DriverService } from 'src/app/Shachlav/services/driver.service';
import { OrderService } from 'src/app/Shachlav/services/order.service';
import { Order } from 'src/app/Shachlav/models/order.models';
import { MaterialTypeOrder } from 'src/app/Shachlav/Models/materialTypeOrder.models';
import { Material } from 'src/app/Shachlav/Models/material.models';
import { UsersService } from 'src/app/Shachlav/services/users.service';
import { Customer } from 'src/app/Shachlav/Models/customer.models';
import { materialize } from 'rxjs/operators';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {

  constructor(private fb:FormBuilder,public orderService:OrderService,public userService:UsersService ) { }
  newOrderForm:FormGroup;
  CurrentCustomer:Customer;
  VehiclesTypes:Array<String>;
  OrderDetailBool:Array<boolean>=[false,false];
 PumpDetail:Array<Material>=new Array<Material>();
 OrderDetail:Array<Material>=new Array<Material>();
//  OrderDetail:Array<{OrderType:string,Element:string,Amount:number,TypeId:Array<Material>}>=new Array<{OrderType:string,Element:string,Amount:number,TypeId:Array<Material>}>();
 o:Order;
 m:Array<MaterialTypeOrder>=new Array<MaterialTypeOrder>();
 createdOrder:Order;

  ngOnInit(): void {

    this.userService.getLoggedInUser().subscribe(suc=>this.CurrentCustomer=suc);
    this.PumpDetail.push(new Material(null,""));
    this.OrderDetail.push(new Material(null,""));

  //   this.OrderDetail.push({OrderType:" ",Element:" ",Amount:0,TypeId:new Array<Material>()});
  //   this.newOrderForm = this.fb.group({
  //     SiteAdress:[''],
  //     OrderDate: [''],
  //     OrderDueDate:[''],
  //     StartTime:[''],
  //     EndTime:[''],
  //     ConcreteTest:[''],
  //     IsPump:[''],
  //     Comment:['']
    
  //   });
  
  }
  addItem(event:Material,index:number){
    console.log(index,event);
this.OrderDetail[index].Id=event.Id;
this.OrderDetail[index].Name=event.Name;
// for (let i = 0; i < event.TypeId.length; i++) {
//   this.OrderDetail[index].TypeId[i]=event.TypeId[i];
// }
  }
onSubmit()
{
  
  const order={
    ...this.newOrderForm.value
  }
order["OrderDate"]=new Date();
order["CustomerId"]=this.CurrentCustomer?.Id;
order["listMaterial"].push(this.OrderDetail);
order["listMaterial"].push(this.PumpDetail);



  this.orderService.AddOrder(order as Order).subscribe(
    suc=>{;console.log("great", this.createdOrder)},
    err=>{console.log("errAddOrder")}
  )
}

//איך זה מכפיל את הקומפוננטה?
AddMaterial(){
  // this.OrderDetail.push({OrderType:" ",Element:" ",Amount:0,TypeId:new Array<Material>()});
}
RemoveMaterial(){
  this.OrderDetail.pop();
}
title = 'demo';
exportTime = {  minute: 15,hour: 7, meriden: 'PM', format: 24 };

onChangeHour(event) {
 console.log('event', event);
}
AddPump(){
 this.PumpDetail.push(new Material(null,""));


}
RemovePump(){
  this.PumpDetail.pop();

}
addPump(event:Material,i:number){
this.PumpDetail[i]=event;
console.log(event);
console.log(this.PumpDetail);
}
}
