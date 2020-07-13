import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';

import {ValidationService} from 'src/app/Services/validation.service'

@Component({
  selector: 'app-provider-register',
  templateUrl: './provider-register.component.html',
  styleUrls: ['./provider-register.component.css']
})
export class ProviderRegisterComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  providerRegisterForm:FormGroup;
    CompanyName:string; 
    CompanyCode:string; 
    Address:string; 
    PhoneNumber:string; 
    CellNumber:string;  
    Email:string;  
    UserName:string; 
    Password:string;
    
    CheckPassword:string; 
  ngOnInit(): void {
    // this.providerRegisterForm = this.fb.group({
    //   IdentityNumber: ['', [Validators.required,Validators.minLength(9),Validators.maxLength(9),ValidationService.IdentityOk()]],
    //   FirstName:['',Validators.required],
    //   LastName:['',Validators.required],
    //   Email:['',[Validators.required,Validators.email]],
    //   PhoneNumber:['',[Validators.required,Validators.minLength(7),Validators.maxLength(10)]],
    //   CellNumber:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    //   Address:['',Validators.required],
    //   BirthDate:['',[Validators.required,ValidationService.BirthDate()]],
    //   UserName:['',Validators.required],
    //   Password:['',Validators.required],
    //   CheckPassword:['',[Validators.required,ValidationService.matchValues('Password'),]],
    // });
  }
// OnSubmit(form:FormGroup){

// }
}
