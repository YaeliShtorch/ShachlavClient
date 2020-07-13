import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';

import {ValidationService} from 'src/app/Services/validation.service'

@Component({
  selector: 'app-driver-register',
  templateUrl: './driver-register.component.html',
  styleUrls: ['./driver-register.component.css']
})
export class DriverRegisterComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
 driverRegisterForm:FormGroup;
         IdentityNumber:string;
         FirstName:string;
         LastName:string;
         Email:string;
         PhoneNumber:string;
         CellNumber:string; 
         Address:String;
         BirthDate:Date;
         EntryToWorkDate:Date;
         UserName:string;
         Password:string;
         CheckPassword:string;
         BirthDateAngular:string;
         IsActive:boolean;

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
      UserName:['',Validators.required],
      Password:['',Validators.required],
      CheckPassword:['',[Validators.required,ValidationService.matchValues('Password'),]],
    });
  }
onSubmit(form:FormGroup){
  console.log(form);
}
}
