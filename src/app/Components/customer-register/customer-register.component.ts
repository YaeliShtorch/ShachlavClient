import { Component, OnInit } from '@angular/core';

import { NgForm, FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';

import {ValidationService} from 'src/app/Services/validation.service'
@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  customerRegisterForm:FormGroup;
  IdentityNumber:string;
   FirstName:string;
   LastName:string;
   CompanyName:string;
   Email:string;
   PhoneNumber:string;
   CellNumber:string;
   Address:string;
   UserName:string;
   Password:string;
   CheckPassword:string;
   BirthDate:Date;
   BirthDateAngular:string;
  ngOnInit(): void {
    this.customerRegisterForm = this.fb.group({
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
