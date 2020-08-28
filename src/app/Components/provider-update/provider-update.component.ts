import { Component, OnInit, Inject, SimpleChanges, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ValidationService } from 'src/app/Services/validation.service';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-provider-update',
  templateUrl: './provider-update.component.html',
  styleUrls: ['./provider-update.component.css']
})
export class ProviderUpdateComponent implements OnInit {

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA)public passObj:any, public providerService:ProviderService) { }
  updateForm:FormGroup;

  ngOnChanges(changes: SimpleChanges){
  console.log(changes.prop);
  }
  ngOnInit() {
    console.log(this.passObj);
    this.updateForm = this.fb.group({
      CompanyCode: [this.passObj.passData.CompanyCode, [Validators.required,Validators.minLength(9),Validators.maxLength(9),ValidationService.IdentityOk()]],
      CompanyName:[this.passObj.passData.CompanyName,Validators.required],
      Email:[this.passObj.passData.Email,[Validators.required,Validators.email]],
      PhoneNumber:[this.passObj.passData.PhoneNumber,[Validators.required,Validators.minLength(7),Validators.maxLength(10)]],
      CellNumber:[this.passObj.passData.CellNumber,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      Address:[this.passObj.passData.Address,Validators.required],
      UserName:[this.passObj.passData.UserName,[Validators.required,ValidationService.NewProvider(this.providerService)]],
      Password:[this.passObj.passData.Password,Validators.required],
      // Comments:[this.passObj.PassData.Comments],
    });
  }

}
