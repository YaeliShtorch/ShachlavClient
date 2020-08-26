import { Component, OnInit } from '@angular/core';

import { NgForm, FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';
import {ValidationService} from 'src/app/Services/validation.service'

import { Vehicle } from 'src/app/Models/vehicle.models';
import { OrderService } from 'src/app/services/order.service';
import { Material } from 'src/app/Models/material.models';
@Component({
  selector: 'app-add-materials',
  templateUrl: './add-materials.component.html',
  styleUrls: ['./add-materials.component.css']
})
export class AddMaterialsComponent implements OnInit {

  constructor(private fb:FormBuilder,public orderService:OrderService ) { }
addMaterialForm:FormGroup;
Types:Array<String>;
Material:Material;





ngOnInit(): void {
  this.Types=["תוספת","חשיפה","שקיעה","תאור לבטון","סוג בטון","טיט","סוג כלי רכב"];
  this.addMaterialForm = this.fb.group({
  Name:[''],
  Type:[''] 
   
  
  });

}
onSubmit(){
  this.Material=new Material(this.addMaterialForm.value.Name);
switch(this.addMaterialForm.value.Type){
  case 0:{this.orderService.AddVehicleType(this.Material).subscribe(
    suc=>{console.log((suc as Material).Name)},
    error=>{console.log("errAddNewMaterial")})
    break;}
  case 1:{this.orderService.AddClay(this.Material).subscribe(
    suc=>{console.log((suc as Material).Name)},
    error=>{console.log("errAddNewMaterial")})
    break;}
  case 2:{this.orderService.AddConcrete(this.Material).subscribe(
    suc=>{console.log((suc as Material).Name)},
    error=>{console.log("errAddNewMaterial")})
    break;}
  case 3:{this.orderService.AddConcDesc(this.Material).subscribe(
    suc=>{console.log((suc as Material).Name)},
    error=>{console.log("errAddNewMaterial")})
    break;}
  case 4:{this.orderService.AddDeep(this.Material).subscribe(
    suc=>{console.log((suc as Material).Name)},
    error=>{console.log("errAddNewMaterial")})
    break;}
  case 5:{this.orderService.AddExposue(this.Material).subscribe(
    suc=>{console.log((suc as Material).Name)},
    error=>{console.log("errAddNewMaterial")})
    break;}
  case 6:{this.orderService.AddExtension(this.Material).subscribe(
    suc=>{console.log((suc as Material).Name)},
    error=>{console.log("errAddNewMaterial")})
    break;}
 
}




    
}
}
