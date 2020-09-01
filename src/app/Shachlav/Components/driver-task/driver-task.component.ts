import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';

import {ValidationService} from 'src/app/Shachlav/Services/validation.service'
import { DriverService } from 'src/app/Shachlav/Services/driver.service';
import { DriverWork } from 'src/app/Shachlav/Models/driverWork.models';
import { UsersService } from 'src/app/Shachlav/Services/users.service';
import { Vehicle } from 'src/app/Shachlav/Models/vehicle.models';
import { newArray } from '@angular/compiler/src/util';
import { Customer } from 'src/app/Shachlav/Models/customer.models';
import { Order } from 'src/app/Shachlav/Models/order.models';
import { CustomerService } from 'src/app/Shachlav/Services/customer.service';
import { OrderService } from 'src/app/Shachlav/Services/order.service';
import { Driver } from 'src/app/Shachlav/Models/driver.models';
import { element } from 'protractor';
@Component({
  selector: 'app-driver-task',
  templateUrl: './driver-task.component.html',
  styleUrls: ['./driver-task.component.css']
})
export class DriverTaskComponent implements OnInit {


  constructor(private fb:FormBuilder,public driverTaskService:DriverService,public userServise:UsersService,public customerService:CustomerService,public orderService:OrderService ) { }
  driverTaskForm:FormGroup;
  DriverWork:DriverWork;
  Vehicles:Array<Vehicle>;
  Customers:Array<Customer>;
  Orders:Array<Order>;
  Drivers:Array<Driver>;
  OrderId:number;
  CustId:number;
 


 
  ngOnInit(): void {
    this.driverTaskForm = this.fb.group({
      Driver:['', Validators.required],
      StartTime : ['', Validators.required],
      EndTime:['',Validators.required],
      WorkDate:['',[Validators.required,ValidationService.DisableDates]],
      Vehicle:['',Validators.required],
      Customer:['',ValidationService.OneOfTworequired('OrderAddress')],
      OrderAddress:['',ValidationService.OneOfTworequired('Customer')],
      Amount :['',Validators.required],
    
    });
    
    this.driverTaskService.GetAllVehicles().subscribe(
        suc=>{
          this.Vehicles=new Array<Vehicle>();
         for(var i = 0; i < (suc as Array<Vehicle>).length; i++){
          this.Vehicles[i]=(suc[i] as Vehicle);
          }
          alert("gotAll")}
        ,err=>{console.log("errGetAllVehicles")},);
      
    this.customerService.GetAllCustomers().subscribe(
        suc=>{
          this.Customers=new Array<Customer>();
         for(var i = 0; i < (suc as Array<Customer>).length; i++){
          this.Customers[i]=(suc[i] as Customer);
          }
          alert("gotAll")}
        ,err=>{console.log("errGetAllCustomers")},);
     
    this.orderService.GetOrdersTwoMonthAgo().subscribe(
        suc=>{
          this.Orders=new Array<Order>();
         for(var i = 0; i < (suc as Array<Order>).length; i++){
          this.Orders[i]=(suc[i] as Order);
          }
          alert("gotAll")}
        ,err=>{console.log("errGetAllorders")},);
        this.driverTaskService.GetAllDrivers().subscribe(
          suc=>{
            this.Drivers=new Array<Driver>();
           for(var i = 0; i < (suc as Array<Driver>).length; i++){
            this.Drivers[i]=(suc[i] as Driver);
            }
            alert("gotAll")}
          ,err=>{console.log("errGetAllDriver")},);
    }
    
  

   onSubmit(){
this.Customers.forEach(element=>{
  if(element.Id=this.driverTaskForm.value.Customer)
this.CustId=element.Id;
 } )
 this.Orders.forEach(element=>{
  if(element.SiteAdress=this.driverTaskForm.value.OrderAddress||element.CustomerId==this.CustId)
this.OrderId=element.Id;
 } )
   
  this.driverTaskService.AddDriverTask(  new DriverWork( this.driverTaskForm.value.Driver,this.OrderId,this.driverTaskForm.value.Vehicle,
    this.driverTaskForm.value.StartTime, this.driverTaskForm.value.EndTime, this.driverTaskForm.value.WorkDate,
    this.driverTaskForm.value.Amount)).subscribe(
      suc=>{
        alert("driverTaskAdded")
      },
      err=>{
        alert("errDriverTaskAdded")
      }
    )
    
     
  
   }
   title = 'demo';
   exportTime = {  minute: 15,hour: 7, meriden: 'PM', format: 24 };

  onChangeHour(event) {
    console.log('event', event);
  }
}
