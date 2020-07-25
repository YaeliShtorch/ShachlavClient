import { Injectable } from '@angular/core';
import {Manager} from 'src/app/Models/manager.models';
import {Customer} from 'src/app/Models/customer.models';
import {Provider} from 'src/app/Models/provider.models';
import {Driver} from 'src/app/Models/driver.models';
import { ManagerService } from './manager.service';
import { CustomerService } from './customer.service';
import { ProviderService } from './provider.service';
import { DriverService } from './driver.service';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  currentUser={
  }
  
  constructor(public managerService:ManagerService,public customerService:CustomerService,
  public  providerService:ProviderService,public driverService:DriverService) {
    this.currentUser

}
found:boolean;
ManagerL:Manager;
CustomerL:Customer;
ProviderL:Provider;
DriverL:Driver;
setCurrentUser(username:string, password:string,type:string){
  switch(type){
    case 'Manager':{
      this.managerService.GetManagerUP(username,password).subscribe(
        suc=>{
      
         if(suc==null)
         {
           this.found=false
         }
         else{
          this.ManagerL=suc as Manager;
          this.found=true;
         }
        },
        err=>{
alert("Server error")
        }
      )
      break;
    }
    case 'Customer':{
      this.customerService.GetCustomerUP(username,password).subscribe(
        suc=>{
      
         if(suc==null)
         {
           this.found=false
         }
         else{
          this.CustomerL=suc as Customer;
          this.found=true;
         }
        },
        err=>{
alert("Server error")
        }
      )
      break;
    }
    case 'Provider':{
      this.providerService.GetProviderUP(username,password).subscribe(
        suc=>{
      
         if(suc==null)
         {
           this.found=false
         }
         else{
          this.ProviderL=suc as Provider;
          this.found=true;
         }
        },
        err=>{
alert("Server error")
        }
      )
      break;
    }
    case 'Driver':{
      this.driverService.GetDriverUP(username,password).subscribe(
        suc=>{
      
         if(suc==null)
         {
           this.found=false
         }
         else{
          this.DriverL=suc as Driver;
          this.found=true;
         }
        },
        err=>{
alert("Server error")
        }
      )
      break;
    }
  }
  if(this.found){
  localStorage.setItem('name',username);
  localStorage.setItem('password',password);
}
}

getCurrentUser(){
if(localStorage.getItem('userName')!=null&&localStorage.getItem('password')!=null){
  this.currentUser['userName']=localStorage.getItem('userName');
  this.currentUser['password']=localStorage.getItem('password');
return this.currentUser;
}
return null;
}


}
