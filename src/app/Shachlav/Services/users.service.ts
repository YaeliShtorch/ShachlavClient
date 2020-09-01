import { Injectable } from '@angular/core';
import {Manager} from 'src/app/Shachlav/Models/manager.models';
import {Customer} from 'src/app/Shachlav/Models/customer.models';
import {Provider} from 'src/app/Shachlav/Models/provider.models';
import {Driver} from 'src/app/Shachlav/Models/driver.models';
import {ManagerServiceMService} from './manager-service-m.service';
import { CustomerService } from './customer.service';
import { ProviderService } from './provider.service';
import { DriverService } from './driver.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class UsersService {
  constructor(public customerService:CustomerService,public managerService:ManagerServiceMService,

  public  providerService:ProviderService,public driverService:DriverService) {


}
type:string;
found:boolean;
ManagerL:Manager;
CustomerL:Customer;
ProviderL:Provider;
DriverL:Driver;



setCurrentUser(username:string, password:string,type:string):Observable<any>{
  this.Logout();
  switch(type){
    case 'Manager':{
      return this.managerService.GetManagerUP(username,password);
  }
    case 'Customer':{
      return this.customerService.GetCustomerUP(username,password);
    }
    case 'Provider':{
      return this.providerService.GetProviderUP(username,password)
    }
    case 'Driver':{
      return this.driverService.GetDriverUP(username,password)
  }

}
}

getCurrentUser(s:object,type:string){

 switch(type){
   case "Manager":{
    this.ManagerL=s as Manager;
     return this.ManagerL;
break;
   }
 
 case "Customer":{
  this.CustomerL=s as Customer;
  return this.CustomerL;
break;
}
case "Driver":{
  this.DriverL=s as Driver;
  return this.DriverL;
break;
}
case "Provider":{
  this.ProviderL=s as Provider;
  return this.ProviderL;
break;
}
 }

}
Logout(){
 
  if(localStorage.getItem('name')!=null&& localStorage.getItem('password')!=null){
    localStorage.removeItem('name');
   
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
