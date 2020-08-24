import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';
import {ValidationService} from 'src/app/Services/validation.service'
import { VehicleService } from 'src/app/services/vehicle.service';
import { Vehicle } from 'src/app/Models/vehicle.models';
@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {


constructor(private fb:FormBuilder,public vehicleTaskService:VehicleService ) { }
addVehicleForm:FormGroup;
VehiclesTypes:Array<String>;
Vehicle:Vehicle;





ngOnInit(): void {
  this.VehiclesTypes=["משאבה 62 מטר","משאבה 56 מטר","משאבה 52 מטר","משאבה 42 מטר","משאבה 36 מטר","משאבה 32 מטר","משאבה 28 מטר","משאבה 24 מטר","משאבת מייקו עם זרוע","משאבת מייקו"];
  this.addVehicleForm = this.fb.group({
    Description : [''],
    VType:[''],
    PipesLength:[''],
    LicenseNumber:[''],
    DriverId:[''],
    MixerNumber:[''],
    PumpTypeId:[''],
   
  
  });

}
onSubmit(){
this.Vehicle=new Vehicle(this.addVehicleForm.value.Description,
  this.addVehicleForm.value.VType,
  this.addVehicleForm.value.PipesLength,
  this.addVehicleForm.value.LicenseNumber,
  this.addVehicleForm.value.DriverId,
  this.addVehicleForm.value.MixerNumber,
  this.addVehicleForm.value.PumpTypeId);
  this.vehicleTaskService.AddVehicle(this.Vehicle).subscribe(
    suc=>{console.log((suc as Vehicle).Description)},
    error=>{console.log("errAddNewVehicle")})
}
}
