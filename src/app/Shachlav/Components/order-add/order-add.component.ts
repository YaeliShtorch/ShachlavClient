import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import {ValidationService} from 'src/app/Shachlav/Services/validation.service'
import { DriverWork } from 'src/app/Shachlav/Models/driverWork.models'
import { Vehicle } from 'src/app/Shachlav/Models/vehicle.models';
import { DriverService } from 'src/app/Shachlav/Services/driver.service';
import { OrderService } from 'src/app/Shachlav/Services/order.service';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {

  constructor(private fb:FormBuilder,orderService:OrderService ) { }
  newOrderForm:FormGroup;
  VehiclesTypes:Array<String>;
 OrderDetail:Array<boolean>=[true];
  ngOnInit(): void {
    this.VehiclesTypes=["משאבה 62 מטר","משאבה 56 מטר","משאבה 52 מטר","משאבה 42 מטר","משאבה 36 מטר","משאבה 32 מטר","משאבה 28 מטר","משאבה 24 מטר","משאבת מייקו עם זרוע","משאבת מייקו"];
    this.newOrderForm = this.fb.group({
      OrderDate: [''],
      OrderTime:[''],
    
    
      SiteAdress:[''],
      ConcreteCheck:[''],
    
    
      Comment:['']
    
    });
  
  }
onSubmit()
{
  
}
AddMaterial(){
  this.OrderDetail.push(true);
}
RemoveMaterial(){
  this.OrderDetail.pop();
}
title = 'demo';
exportTime = {  minute: 15,hour: 7, meriden: 'PM', format: 24 };

onChangeHour(event) {
 console.log('event', event);
}

}
