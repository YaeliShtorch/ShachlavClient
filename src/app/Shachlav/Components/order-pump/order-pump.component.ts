import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { OrderService } from 'src/app/Shachlav/services/order.service';
import { Material } from 'src/app/Shachlav/Models/material.models';

@Component({
  selector: 'app-order-pump',
  templateUrl: './order-pump.component.html',
  styleUrls: ['./order-pump.component.css']
})
export class OrderPumpComponent implements OnInit {
  constructor(private fb:FormBuilder,private orderService:OrderService ) { }
  newPumpForm:FormGroup;
  VehiclesTypes:Array<Material>;
  @Output() newItemEvent = new EventEmitter<{Pump:Material}>();
  ngOnInit(): void {
 
    this.VehiclesTypes=new Array<Material>();
    this.orderService.GetVehicleType().subscribe(
      suc=>{
        this.VehiclesTypes=(suc as Array<Material>);  
      },
      err=>{console.log("errGetVehicleType")})
    ;
    this.newPumpForm = this.fb.group({
    
      VehicleType:['']

    });
  
  }
  Change(){
    console.log("hi");
    console.log(this.VehiclesTypes[this.newPumpForm.value.VehicleType]);
        this.newItemEvent.emit({Pump:this.VehiclesTypes[this.newPumpForm.value.VehicleType]});
      }

}

