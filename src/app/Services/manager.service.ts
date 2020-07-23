// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ManagerService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Manager } from '../Models/manager.models';
//import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class ManagerService {
thisController:string="Manager/";

constructor(public Http:HttpClient) { }

  // GetManagerExample(){
  //   return this.Http.get(environment.baseUrl+this.thisController+"GetExample?id=5")
  // }
  GetManagerId(id:number){
    return this.Http.get(environment.baseUrl+this.thisController+"GetId?id="+id)
  }
  GetManagerUP(UserName:string, Password:string){
    return this.Http.get(environment.baseUrl+this.thisController+"GetUP?UserName="+UserName+"&Password="+Password);
  }
  GetManagerUN(UserName:string){
    return this.Http.get(environment.baseUrl+this.thisController+"GetUN?UserName="+UserName);
  }
  
  GetAllManagers(){
    return this.Http.get(environment.baseUrl+this.thisController+"GetAll"); 
  }
  GetManagerIN(identityNumber:string){
    return this.Http.get(environment.baseUrl+this.thisController+"GetIN?identityNumber="+identityNumber); 
  }
  GetManagersFLN(Name:string){
    return this.Http.get(environment.baseUrl+this.thisController+"GetFLN?Name="+Name); 
  }
  GetManagerE(Email:string){
    return this.Http.get(environment.baseUrl+this.thisController+"GetE?Email="+Email); 
  }
  GetManagerP(phone:string){
    return this.Http.get(environment.baseUrl+this.thisController+"GetP?phone="+phone); 
  }
  GetManagerA(Address:string){
    return this.Http.get(environment.baseUrl+this.thisController+"GetA?Address="+Address); 
  }
  GetManagerBD(BirthDate:Date){
    return this.Http.get(environment.baseUrl+this.thisController+"GetBD?BirthDate="+BirthDate); 
  }
  
 AddManager(am:Manager){
   return this.Http.post(environment.baseUrl+this.thisController+"Add",am);
 }
 
 
 DeleteManager(id:number)
 {
  return this.Http.get(environment.baseUrl+this.thisController+"Delete?id="+id)
 }

 UpdateManager(um:Manager)
 {
  return this.Http.post(environment.baseUrl+this.thisController+"UpDate",um);
 }
//  IsExistUP(UserName:string,Password:string){
//   return this.Http.post(environment.baseUrl+this.thisController+"Exist",{UserName,Password});
//  }
//  IsExistUP(UserName:string, Password:string){
//   return this.Http.get(environment.baseUrl+this.thisController+"Exist?UserName="+UserName);//+"&Password="+Password
//  }
}
