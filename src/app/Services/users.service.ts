import { Injectable } from '@angular/core';
import {Manager} from 'src/app/Models/manager.models';
import {Customer} from 'src/app/Models/customer.models';
import {Provider} from 'src/app/Models/provider.models';
import {Driver} from 'src/app/Models/driver.models';
<<<<<<< HEAD
import {ManagerService} from './manager.service';
=======
// import {ManagerService} from './manager.service';
>>>>>>> 69ef86e9d530e5b4c154d8958f2182ffef851a0d
import { CustomerService } from './customer.service';
import { ProviderService } from './provider.service';
import { DriverService } from './driver.service';
@Injectable({
  providedIn: 'root'
})

export class UsersService {
<<<<<<< HEAD
  constructor(public managerService:ManagerService,  public customerService:CustomerService,
=======
  constructor(public customerService:CustomerService,
>>>>>>> 69ef86e9d530e5b4c154d8958f2182ffef851a0d
  public  providerService:ProviderService,public driverService:DriverService) {


}
type:string;
found:boolean;
ManagerL:Manager;
CustomerL:Customer;
ProviderL:Provider;
DriverL:Driver;
setCurrentUser(username:string, password:string,type:string){
  this.Logout();
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
  localStorage.setItem('type',type);

}
return this.found;
}

getCurrentUser(){
if(this.found==true){
 switch( localStorage.getItem('type')){
   case "Manager":{
     return this.ManagerL;
break;
   }
 
 case "Customer":{
  return this.CustomerL;
break;
}
case "Driver":{
  return this.DriverL;
break;
}
case "Provider":{
  return this.ProviderL;
break;
}
 }
}
else
return null;
}
Logout(){
 
  if(localStorage.getItem('userName')!=null&& localStorage.getItem('password')!=null){
    localStorage.removeItem('userName');
   
    localStorage.removeItem('password');  
    this.found=false;
    switch( localStorage.getItem('type')){
      case "Manager":{
        this.ManagerL=null;
   break;
      }
    
    case "Customer":{
     this.CustomerL=null;
   break;
   }
   case "Driver":{
     this.DriverL=null;
   break;
   }
   case "Provider":{
     this.ProviderL=null;
   break;
   }
    }
    localStorage.removeItem('type');
   }

  
}
}
