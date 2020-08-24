import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import {ValidationService} from 'src/app/Services/validation.service'
import { DriverWork } from 'src/app/Models/driverWork.models'
import { Vehicle } from 'src/app/Models/vehicle.models';
import { DriverService } from 'src/app/services/driver.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private fb:FormBuilder,orderService:OrderService ) { }
  newOrderForm:FormGroup;
  VehiclesTypes:Array<String>;
 
  ngOnInit(): void {
   
    this.newOrderForm = this.fb.group({
      OrderType:[''],
      Element:[''],    
      Amount:[''],
     
    
    });
  
  }
onSubmit()
{
  
}
title = 'demo';
exportTime = {  minute: 15,hour: 7, meriden: 'PM', format: 24 };

onChangeHour(event) {
 console.log('event', event);
}

}

