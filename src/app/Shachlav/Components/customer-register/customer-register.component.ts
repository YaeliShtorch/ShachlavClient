import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';
import {ValidationService} from 'src/app/Shachlav/Services/validation.service'
import { CustomerService } from 'src/app/Shachlav/Services/customer.service';
import { Customer } from 'src/app/Shachlav/Models/customer.models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {

  constructor(private fb:FormBuilder,public customerService:CustomerService, public snackbar:MatSnackBar) { }
  customerRegisterForm:FormGroup;
  // IdentityNumber:string;
  //  FirstName:string;
  //  LastName:string;
  //  CompanyName:string;
  //  Email:string;
  //  PhoneNumber:string;
  //  CellNumber:string;
  //  Address:string;
  //  UserName:string;
  //  Password:string;
  //  CheckPassword:string;
  //  BirthDate:Date;
  //  BirthDateAngular:string;
  CustomerAdd:Customer;
  ngOnInit(): void {
    this.customerRegisterForm = this.fb.group({
      IdentityNumber: ['', [Validators.required,Validators.minLength(9),Validators.maxLength(9),ValidationService.IdentityOk()]],
      FirstName:['',Validators.required],
      LastName:['',Validators.required],
      CompanyName:['',Validators.required],
      BusinessCode:['',Validators.required],
      Email:['',[Validators.required,Validators.email]],
      PhoneNumber:['',[Validators.required,Validators.minLength(7),Validators.maxLength(10)]],
      CellNumber:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      Address:['',Validators.required],
      BirthDate:['',[Validators.required,ValidationService.BirthDate()]],
      UserName:['',[Validators.required,ValidationService.NewCustomer(this.customerService)]],
      Password:['',Validators.required],
      CheckPassword:['',[Validators.required,ValidationService.matchValues('Password'),]],
    });
  }
  onSubmit(){
    this.CustomerAdd=new Customer(null,this.customerRegisterForm.value.IdentityNumber,
      this.customerRegisterForm.value.FirstName,
      this.customerRegisterForm.value.LastName,
      this.customerRegisterForm.value.CompanyName,
      this.customerRegisterForm.value.BusinessCode,
      this.customerRegisterForm.value.Email,
      this.customerRegisterForm.value.PhoneNumber,
      this.customerRegisterForm.value.CellNumber,
      this.customerRegisterForm.value.Address,
      this.customerRegisterForm.value.UserName,
      this.customerRegisterForm.value.Password,
      this.customerRegisterForm.value.BirthDate,
      true);
    this.customerService.AddCustomer(this.CustomerAdd).subscribe(
      suc=>{this.snackbar.open('הוסף נהג למערכת',null,{duration:4000}) },
      err=>{this.snackbar.open('שגיאה, נסה מאוחר יותר',null,{duration:4000})})
  }
}
