import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';

import {ValidationService} from 'src/app/Services/validation.service'
import { DriverService } from 'src/app/services/driver.service';
import { DriverWork } from 'src/app/Models/driverWork.models';
import { UsersService } from 'src/app/services/users.service';
import { Vehicle } from 'src/app/Models/vehicle.models';
import { newArray } from '@angular/compiler/src/util';
@Component({
  selector: 'app-driver-task',
  templateUrl: './driver-task.component.html',
  styleUrls: ['./driver-task.component.css']
})
export class DriverTaskComponent implements OnInit {


  constructor(private fb:FormBuilder,public driverTaskService:DriverService,public userServise:UsersService ) { }
  driverTaskForm:FormGroup;
  DriverWork:DriverWork;
  Vehicles:Array<Vehicle>
  ngOnInit(): void {
    this.driverTaskForm = this.fb.group({
      StartTime : ['', Validators.required],
      EndTime:['',Validators.required],
      WorkDate:['',[Validators.required,ValidationService.DisableDates]],
      Amount :['',Validators.required],
    
    });
    this.Vehicles = new Array<Vehicle>();
    this.driverTaskService.GetAllVehicles().subscribe(
        suc=>{
          this.Vehicles=new Array<Vehicle>();
         for(var i = 0; i < (suc as Array<Vehicle>).length; i++){
          this.Vehicles[i]=(suc as Array<Vehicle>)[i];
          }
        alert("gotAll")}
        ,err=>{alert("errGetAllManagers")},);
    }
    
  

   onSubmit(){
    //  this.DriverWork=new DriverWork((this.userServise.getCurrentUser as Driver).Id,)
    //  this.driverTaskForm.AddDriverTask()
   }
   title = 'demo';
   exportTime = {  minute: 15,hour: 7, meriden: 'PM', format: 24 };

  onChangeHour(event) {
    console.log('event', event);
  }
}
