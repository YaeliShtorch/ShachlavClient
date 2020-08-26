import { Component, OnInit, Inject } from '@angular/core';
import { ManagerService } from 'src/app/Services/manager.service';
import { NgForm, FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';
import { ValidationService } from 'src/app/Services/validation.service';
import { Manager } from 'src/app/Models/manager.models';
import{MAT_DIALOG_DATA} from '@angular/material'

@Component({
  selector: 'app-manager-update',
  templateUrl: './manager-update.component.html',
  styleUrls: ['./manager-update.component.css']
})
export class ManagerUpdateComponent implements OnInit {
<<<<<<< HEAD
  registerForm:FormGroup;
=======
  updateForm:FormGroup;
>>>>>>> 85012b8928edb4d3d5d2db381771f18f62f449a7
  ManagerUpdate:Manager;
  constructor(public managerService:ManagerService,private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public passObj:any) { }

  ngOnInit(): void {
    
<<<<<<< HEAD
    this.registerForm = this.fb.group({
=======
    this.updateForm = this.fb.group({
>>>>>>> 85012b8928edb4d3d5d2db381771f18f62f449a7
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
<<<<<<< HEAD
  const controls = this.registerForm.controls;
=======
  const controls = this.updateForm.controls;
>>>>>>> 85012b8928edb4d3d5d2db381771f18f62f449a7
  for (const name in controls) {
      if (controls[name].invalid) {
          // invalid.push(name);
          console.log(name);
      }
  }
  // return invalid;
}

<<<<<<< HEAD
onSubmit(){

 
  // this.ManagerUpdate=new Manager(this.registerForm.value.Id,this.registerForm.value.IdentityNumber,
  //   this.registerForm.value.FirstName,
  //   this.registerForm.value.LastName,
  //   this.registerForm.value.Email,
  //   this.registerForm.value.PhoneNumber,
  //   this.registerForm.value.CellNumber,
  //   this.registerForm.value.Address,
  //   this.registerForm.value.BirthDate,
  //   this.registerForm.value.UserName,
  //   this.registerForm.value.Password)
  // this.managerService.UpdateManager(this.ManagerUpdate).subscribe(
  //   suc=>{console.log(this.ManagerUpdate.FirstName)},
  //   err=>{console.log("didnt reach")}
  // )
}
=======

>>>>>>> 85012b8928edb4d3d5d2db381771f18f62f449a7
}
