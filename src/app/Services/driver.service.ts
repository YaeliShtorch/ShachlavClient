import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Driver } from '../Models/driver.models';
import { DriverTaskComponent } from '../Components/driver-task/driver-task.component';
import { DriverWork } from '../Models/driverWork.models';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  thisController:string="Driver/";

  constructor(public Http:HttpClient) { }
  
    // GetDriverExample(){
    //   return this.Http.get(environment.baseUrl+this.thisController+"GetExample?id=5")
    // }
    GetDriverId(id:number){
      return this.Http.get(environment.baseUrl+this.thisController+"GetId?id="+id)
    }
    GetDriverUP(UserName:string, Password:string){
      return this.Http.get(environment.baseUrl+this.thisController+"GetUP?UserName="+UserName+"&Password="+Password);
    }
    GetDriverUN(UserName:string){
      return this.Http.get(environment.baseUrl+this.thisController+"GetUN?UserName="+UserName);
    }
    
    GetAllDrivers(){
      return this.Http.get(environment.baseUrl+this.thisController+"GetAll"); 
    }
    GetDriverIN(identityNumber:string){
      return this.Http.get(environment.baseUrl+this.thisController+"GetIN?identityNumber="+identityNumber); 
    }
    GetDriversFLN(Name:string){
      return this.Http.get(environment.baseUrl+this.thisController+"GetFLN?Name="+Name); 
    }
    GetDriverE(Email:string){
      return this.Http.get(environment.baseUrl+this.thisController+"GetE?Email="+Email); 
    }
    GetDriverP(phone:string){
      return this.Http.get(environment.baseUrl+this.thisController+"GetP?phone="+phone); 
    }
    GetDriverA(Address:string){
      return this.Http.get(environment.baseUrl+this.thisController+"GetA?Address="+Address); 
    }
    GetDriverBD(BirthDate:Date){
      return this.Http.get(environment.baseUrl+this.thisController+"GetBD?BirthDate="+BirthDate); 
    }
    
   AddDriver(am:Driver){
     return this.Http.post(environment.baseUrl+this.thisController+"Add",am);
   }
   
   
   DeleteDriver(id:number)
   {
    return this.Http.get(environment.baseUrl+this.thisController+"Delete?id="+id)
   }
  
   UpdateDriver(um:Driver)
   {
    return this.Http.post(environment.baseUrl+this.thisController+"UpDate",um);
   }
   AddDriverTask(am:DriverWork){
    return this.Http.post(environment.baseUrl+this.thisController+"AddDriverWork",am);
  }
  GetAllVehicles(){
    return this.Http.get(environment.baseUrl+this.thisController+"GetAllVehicles"); 
  }
  //  IsExistUP(UserName:string,Password:string){
  //   return this.Http.post(environment.baseUrl+this.thisController+"Exist",{UserName,Password});
  //  }
  //  IsExistUP(UserName:string, Password:string){
  //   return this.Http.get(environment.baseUrl+this.thisController+"Exist?UserName="+UserName);//+"&Password="+Password
  //  }
}
