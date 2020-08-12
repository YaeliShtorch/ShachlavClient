import { Component, OnInit } from '@angular/core';

import { NgForm, FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';

import {ValidationService} from 'src/app/Services/validation.service'
import { OrderService } from 'src/app/services/order.service';
import { Material } from 'src/app/Models/material.models';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.css']
})
export class AddMaterialComponent implements OnInit {



  constructor(private fb:FormBuilder,public MaterialService:OrderService ) { }
addMaterialForm:FormGroup;
Material:Material;

ngOnInit(): void {
 
  this.addMaterialForm = this.fb.group({
   Name : [''],
  });

}
onSubmit(){
this.Material=new Material(this.addMaterialForm.value.Name);
  this.MaterialService.AddMaterial(this.Material).subscribe(
    suc=>{console.log((suc as Material).Name)},
    error=>{console.log("errAddNewMaterial")})
}

}





