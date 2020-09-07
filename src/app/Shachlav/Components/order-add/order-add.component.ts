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
 OrderDetail:Array<{OrderType:string,Element:string,Amount:number,TypeId:Array<Material>}>=new Array<{OrderType:string,Element:string,Amount:number,TypeId:Array<Material>}>();
 o:Order;
 m:Array<MaterialTypeOrder>=new Array<MaterialTypeOrder>();

  ngOnInit(): void {
    this.PumpDetail.push(new Material(null,""));
    this.OrderDetail.push({OrderType:" ",Element:" ",Amount:0,TypeId:new Array<Material>()});
    this.newOrderForm = this.fb.group({
      SiteAdress:[''],
      OrderDate: [''],
      OrderDueDate:[''],
      StartTime:[''],
      EndTime:[''],
      ConcreteTest:[''],
      IsPump:[''],
      Comment:['']
    
    });
  
  }
  addItem(event:{OrderType:string,Element:string,Amount:number,TypeId:Array<Material>},index:number){
this.OrderDetail[index].OrderType=event.OrderType;
this.OrderDetail[index].Element=event.Element;
this.OrderDetail[index].Amount=event.Amount;
for (let i = 0; i < event.TypeId.length; i++) {
  this.OrderDetail[index].TypeId[i]=event.TypeId[i];
}
  }
onSubmit()
{
  this.CurrentCustomer=this.userService.CustomerL;
  this.o=new Order(null,this.CurrentCustomer.Id,this.newOrderForm.value.SiteAdress,new Date(),
  this.newOrderForm.value.OrderDueDate,this.newOrderForm.value.StartTime,this.newOrderForm.value.EndTime,false,false,null,
  this.newOrderForm.value.Comment,this.newOrderForm.value.ConcreteCheck);
  console.log(this.o);

for (let index = 0; index < this.OrderDetail.length; index++) {
 if(this.OrderDetail[index].OrderType.match("Concrete")){ 
       this.OrderDetailBool[0]=true;
 }
 else if(this.OrderDetail[index].OrderType.match("Clay")){ 
  this.OrderDetailBool[1]=true;
}


this.m[index]=new MaterialTypeOrder(null,
  null,
  this.OrderDetailBool[0],
  //אם יהי null יפול ,
  this.OrderDetail[index].TypeId[0].Id,
  this.OrderDetail[index].TypeId[1].Id,
  this.OrderDetail[index].TypeId[2].Id,
  this.OrderDetail[index].TypeId[3].Id,
  this.OrderDetail[index].TypeId[4].Id,
  this.OrderDetailBool[1],
  this.OrderDetail[index].TypeId[5].Id,
  false,
  this.OrderDetail[index].Element,
  this.OrderDetail[index].Amount,
  null,
  null)

  console.log(this.m);

  
}
for (let index =this.OrderDetail.length ; index < this.OrderDetail.length+this.PumpDetail.length; index++) {
 this.m[index]=new MaterialTypeOrder(null,
  null,
   null,
   null,
   null,
   null,
   null,
   null,
   false,
   null,
   true,
   //טעות?
  //  this.PumpDetail[index-this.OrderDetail.length].Id,
   this.OrderDetail[index].Element,
   this.OrderDetail[index].Amount,
   this.PumpDetail[index].Id,
   null,
   )}

  this.orderService.AddOrder(this.o,this.m).subscribe(
    suc=>{console.log("great")},
    err=>{console.log("errAddOrder")}
  )
}
AddMaterial(){
  this.OrderDetail.push({OrderType:" ",Element:" ",Amount:0,TypeId:new Array<Material>()});
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
}
}
