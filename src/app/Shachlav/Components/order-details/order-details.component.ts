import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import {ValidationService} from 'src/app/Shachlav/Services/validation.service'
import { DriverWork } from 'src/app/Shachlav/Models/driverWork.models'
import { Vehicle } from 'src/app/Shachlav/Models/vehicle.models';
import { DriverService } from 'src/app/Shachlav/services/driver.service';
import { OrderService } from 'src/app/Shachlav/services/order.service';
import { Material } from 'src/app/Shachlav/Models/material.models';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private fb:FormBuilder,orderService:OrderService ) { }
 
  @Output() newItemEvent = new EventEmitter<{OrderType:string,Element:string,Amount:number,TypeId:Array<Material>}>();
  Materials:Array<Material>=[null,null,null,null,null,null];
  newOrderDetailsForm:FormGroup;
  VehiclesTypes:Array<String>;
 Concrete:boolean=false;
 Clay:boolean=false;
  ngOnInit(): void {
   
    this.newOrderDetailsForm = this.fb.group({
      OrderType:[''],
      Element:[''],    
      Amount:[''],
     
    
    });
  
  }
  change(){
console.log("pppppp");
    this.newItemEvent.emit({OrderType:this.newOrderDetailsForm.value.OrderType,Element:this.newOrderDetailsForm.value.Element,Amount:this.newOrderDetailsForm.value.Amount,TypeId:this.Materials});
  }
// onSubmit()
// {
  
// }

onOrderSubmitted(event:{data:Array<Material>,Type:string}){
  if(event.Type=="Concrete"){
    for (let index = 0; index < 5; index++) {
      this.Materials[index]=event.data[index]; 
    }
  }
  else if(event.Type=="Clay")
  this.Materials[5]=event.data[0]; 
this.change();
  }

Chosen(){
  
  //this.newItemEvent.emit({OrderType:this.newOrderDetailsForm.value.OrderType,Element:this.newOrderDetailsForm.value.Element,Amount:this.newOrderDetailsForm.value.Amount,TypeId:this.Type});
  this.change();
  if(this.newOrderDetailsForm.value.OrderType=="Concrete"){
  this.Concrete=true;
  this.Clay=false;
  }
  else
  if(this.newOrderDetailsForm.value.OrderType=="Clay"){
  this.Clay=true;
  this.Concrete=false;
  }
 else{
 this.Clay=false;
 this.Concrete=false;
 }
}
title = 'demo';
exportTime = {  minute: 15,hour: 7, meriden: 'PM', format: 24 };

onChangeHour(event) {
 console.log('event', event);
}

}



