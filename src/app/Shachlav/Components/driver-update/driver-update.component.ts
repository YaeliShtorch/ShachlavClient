import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{DriverService} from 'src/app/Shachlav/Services/driver.service';
import { ValidationService } from 'src/app/Shachlav/Services/validation.service';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-driver-update',
  templateUrl: './driver-update.component.html',
  styleUrls: ['./driver-update.component.css']
})
export class DriverUpdateComponent implements OnInit {
  updateForm:FormGroup;
  constructor(private fb:FormBuilder,public driverService:DriverService, @Inject(MAT_DIALOG_DATA) public passObj:any) { }

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      IdentityNumber: [this.passObj.passData.IdentityNumber, [Validators.required,Validators.minLength(9),Validators.maxLength(9),ValidationService.IdentityOk()]],
      FirstName:[this.passObj.passData.FirstName,Validators.required],
      LastName:[this.passObj.passData.LastName,Validators.required],
      Email:[this.passObj.passData.Email,[Validators.required,Validators.email]],
      PhoneNumber:[this.passObj.passData.PhoneNumber,[Validators.required,Validators.minLength(7),Validators.maxLength(10)]],
      CellNumber:[this.passObj.passData.CellNumber,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      Address:[this.passObj.passData.Address,Validators.required],
      BirthDate:[this.passObj.passData.BirthDate,[Validators.required,ValidationService.BirthDate()]],
      EntryToWorkDate:[this.passObj.passData.EntryToWorkDate,[Validators.required,ValidationService.DisableDates]],
      IsActive:[this.passObj.passData.IsActive,[Validators.required]],
      UserName:[this.passObj.passData.UserName,[Validators.required,ValidationService.NewDriver(this.driverService)]],
      Password:[this.passObj.passData.Password,Validators.required],
    });
  }

}
