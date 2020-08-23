import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Provider } from '../Models/provider.models';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  thisController:string="Provider/";

  constructor(public Http:HttpClient) { }
  
    // GetProviderExample(){
    //   return this.Http.get(environment.baseUrl+this.thisController+"GetExample?id=5")
    // }
    GetProviderId(id:number){
      return this.Http.get(environment.baseUrl+this.thisController+"GetId?id="+id)
    }
    GetProviderUP(UserName:string, Password:string){
      return this.Http.get(environment.baseUrl+this.thisController+"GetUP?UserName="+UserName+"&Password="+Password);
    }
    GetProviderUN(UserName:string){
      return this.Http.get(environment.baseUrl+this.thisController+"GetUN?UserName="+UserName);
    }
    
    GetAllProviders():Observable<Provider[]>{
      return this.Http.get<Provider[]>(environment.baseUrl+this.thisController+"GetAll"); 
    }
    GetProviderIN(identityNumber:string){
      return this.Http.get(environment.baseUrl+this.thisController+"GetIN?identityNumber="+identityNumber); 
    }
    GetProvidersFLN(Name:string){
      return this.Http.get(environment.baseUrl+this.thisController+"GetFLN?Name="+Name); 
    }
    GetProviderE(Email:string){
      return this.Http.get(environment.baseUrl+this.thisController+"GetE?Email="+Email); 
    }
    GetProviderP(phone:string){
      return this.Http.get(environment.baseUrl+this.thisController+"GetP?phone="+phone); 
    }
    GetProviderA(Address:string){
      return this.Http.get(environment.baseUrl+this.thisController+"GetA?Address="+Address); 
    }
    GetProviderBD(BirthDate:Date){
      return this.Http.get(environment.baseUrl+this.thisController+"GetBD?BirthDate="+BirthDate); 
    }
    
   AddProvider(am:Provider){
     return this.Http.post(environment.baseUrl+this.thisController+"Add",am);
   }
   
   
   DeleteProvider(id:number)
   {
    return this.Http.get(environment.baseUrl+this.thisController+"Delete?id="+id)
   }
  
   UpdateProvider(um:Provider)
   {
    return this.Http.post(environment.baseUrl+this.thisController+"UpDate",um);
   }
  //  IsExistUP(UserName:string,Password:string){
  //   return this.Http.post(environment.baseUrl+this.thisController+"Exist",{UserName,Password});
  //  }
  //  IsExistUP(UserName:string, Password:string){
  //   return this.Http.get(environment.baseUrl+this.thisController+"Exist?UserName="+UserName);//+"&Password="+Password
  //  }
  
//   GetProvider(id:number){
//     return this.Http.get(environment.baseUrl+this.thisController+"Get?id="+id)
//   }
//  AddProvider(p:Provider){
//    return this.Http.post(environment.baseUrl+this.thisController+"Add",p);
//  }
//  GetProviders()
//  {
//   return this.Http.get(environment.baseUrl+this.thisController+"GetAll")
//  }
 
//  DeleteProvider(id:number)
//  {
//   return this.Http.get(environment.baseUrl+this.thisController+"Delete?id="+id)
//  }

//  UpdateProvider(up:Provider)
//  {
//   return this.Http.post(environment.baseUrl+this.thisController+"Update",up);
//  }
}
