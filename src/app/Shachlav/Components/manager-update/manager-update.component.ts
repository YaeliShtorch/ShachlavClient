import { Component, OnInit, Inject } from '@angular/core';
import { ManagerService } from 'src/app/Shachlav/Services/manager.service';
import { NgForm, FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';
import { ValidationService } from 'src/app/Shachlav/Services/validation.service';
import { Manager } from 'src/app/Shachlav/Models/manager.models';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-manager-update',
  templateUrl: './manager-update.component.html',
  styleUrls: ['./manager-update.component.css']
})
export class ManagerUpdateComponent implements OnInit {
  updateForm:FormGroup;
  ManagerUpdate:Manager;
  constructor(public managerService:ManagerService,private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public passObj:any) { }

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
      UserName:[this.passObj.passData.UserName,[Validators.required,ValidationService.NewManager(this.managerService)]],
      Password:[this.passObj.passData.Password,Validators.required],
    });

}

//check which controls are invalid
findInvalidControls() {
  // const invalid = [];
  const controls = this.updateForm.controls;
  for (const name in controls) {
      if (controls[name].invalid) {
          // invalid.push(name);
          console.log(name);
      }
  }
  // return invalid;
}


}
