import { Component, OnInit ,Inject} from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';
import {ValidationService} from 'src/app/Services/validation.service'
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/Models/customer.models';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
updateForm:FormGroup;

  constructor(private fb:FormBuilder,public customerService:CustomerService, @Inject(MAT_DIALOG_DATA) public passObj:any) { }

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      IdentityNumber: [this.passObj.passData.IdentityNumber, [Validators.required,Validators.minLength(9),Validators.maxLength(9),ValidationService.IdentityOk()]],
      FirstName:[this.passObj.passData.FirstName,Validators.required],
      LastName:[this.passObj.passData.LastName,Validators.required],
      CompanyName:[this.passObj.passData.CompanyName,Validators.required],
      BusinessCode:[this.passObj.passData.BusinessCode,Validators.required],
      Email:[this.passObj.passData.Email,[Validators.required,Validators.email]],
      PhoneNumber:[this.passObj.passData.PhoneNumber,[Validators.required,Validators.minLength(7),Validators.maxLength(10)]],
      CellNumber:[this.passObj.passData.CellNumber,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      Address:[this.passObj.passData.Address,Validators.required],
      BirthDate:[this.passObj.passData.BirthDate,[Validators.required,ValidationService.BirthDate()]],
      UserName:[this.passObj.passData.UserName,[Validators.required,ValidationService.NewCustomer(this.customerService)]],
      Password:[this.passObj.passData.Password,Validators.required],
    });
  }

}
