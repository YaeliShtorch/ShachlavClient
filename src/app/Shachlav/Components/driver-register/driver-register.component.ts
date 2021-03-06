import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';
import{Driver} from 'src/app/Shachlav/Models/driver.models'
import {ValidationService} from 'src/app/Shachlav/Services/validation.service'
import { DriverService } from 'src/app/Shachlav/Services/driver.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-driver-register',
  templateUrl: './driver-register.component.html',
  styleUrls: ['./driver-register.component.css']
})
export class DriverRegisterComponent implements OnInit {
DriverAdd:Driver;
driverRegisterForm:FormGroup;
  constructor(private fb:FormBuilder,public driverService:DriverService,public snackbar:MatSnackBar) { }

 

  ngOnInit(): void {
    this.driverRegisterForm = this.fb.group({
      IdentityNumber: ['', [Validators.required,Validators.minLength(9),Validators.maxLength(9),ValidationService.IdentityOk()]],
      FirstName:['',Validators.required],
      LastName:['',Validators.required],
      Email:['',[Validators.required,Validators.email]],
      PhoneNumber:['',[Validators.required,Validators.minLength(7),Validators.maxLength(10)]],
      CellNumber:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      Address:['',Validators.required],
      BirthDate:['',[Validators.required,ValidationService.BirthDate()]],
      EntryToWorkDate:['',[Validators.required,ValidationService.DisableDates]],
      IsActive:['',[Validators.required]],
      UserName:['',[Validators.required,ValidationService.NewDriver(this.driverService)]],
      Password:['',Validators.required],
      CheckPassword:['',[Validators.required,ValidationService.matchValues('Password'),]],

    });

  }

  
onSubmit(){

  this.DriverAdd=new Driver(this.driverRegisterForm.value.Id,
    this.driverRegisterForm.value.IdentityNumber,
    this.driverRegisterForm.value.FirstName,
    this.driverRegisterForm.value.LastName,
    this.driverRegisterForm.value.Email,
    this.driverRegisterForm.value.PhoneNumber,
    this.driverRegisterForm.value.CellNumber,
    this.driverRegisterForm.value.Address,
    this.driverRegisterForm.value.BirthDate,
    this.driverRegisterForm.value.EntryToWorkDate,
    this.driverRegisterForm.value.UserName,
    this.driverRegisterForm.value.Password,
    true);
  this.driverService.AddDriver(this.DriverAdd).subscribe(
    suc=>suc=>{this.snackbar.open('הוסף נהג למערכת',null,{duration:4000}) },
    err=>{this.snackbar.open('שגיאה, נסה מאוחר יותר',null,{duration:4000})})

}
}


