import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';

import {ValidationService} from 'src/app/Services/validation.service'
import { DriverService } from 'src/app/services/driver.service';
import { Vehicle } from 'src/app/Models/vehicle.models';
@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVeihcleComponent implements OnInit {


constructor(private fb:FormBuilder,public driverTaskService:DriverService ) { }
addVehicleForm:FormGroup;
VehiclesTypes:Array<String>;






ngOnInit(): void {
  this.VehiclesTypes=["משאבה 62 מטר","משאבה 56 מטר","משאבה 52 מטר","משאבה 42 מטר","משאבה 36 מטר","משאבה 32 מטר","משאבה 28 מטר","משאבה 24 מטר","משאבת מייקו עם זרוע","משאבת מייקו"];
  this.addVehicleForm = this.fb.group({
    Description : [''],
    PipesLengh:[''],
    LicenseNumber:[''],
    DriverId:[''],
    MixerNumber:[''],
   
  
  });

}
onSubmit(){}
}
