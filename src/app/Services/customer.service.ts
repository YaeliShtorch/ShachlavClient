import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Customer } from '../Models/customer.models';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  thisController:string="Customer/";

constructor(public Http:HttpClient) { }

  // GetCustomerExample(){
  //   return this.Http.get(environment.baseUrl+this.thisController+"GetExample?id=5")
  // }
  GetCustomerId(id:number){
    return this.Http.get(environment.baseUrl+this.thisController+"GetId?id="+id)
  }
  GetCustomerUP(UserName:string, Password:string){
    return this.Http.get<Customer>(environment.baseUrl+this.thisController+"GetUP?UserName="+UserName+"&Password="+Password);
  }
  GetCustomerUN(UserName:string){
    return this.Http.get(environment.baseUrl+this.thisController+"GetUN?UserName="+UserName);
  }
  
  GetAllCustomers(){
    return this.Http.get(environment.baseUrl+this.thisController+"GetAll"); 
  }
  GetCustomerIN(identityNumber:string){
    return this.Http.get(environment.baseUrl+this.thisController+"GetIN?identityNumber="+identityNumber); 
    // identityNumber
  }
  GetCustomersFLN(Name:string){
    return this.Http.get(environment.baseUrl+this.thisController+"GetFLN?Name="+Name); 
  }
  GetCustomerE(Email:string){
    return this.Http.get(environment.baseUrl+this.thisController+"GetE?Email="+Email); 
  }
  GetCustomerP(phone:string){
    return this.Http.get(environment.baseUrl+this.thisController+"GetP?phone="+phone); 
  }
  GetCustomerA(Address:string){
    return this.Http.get(environment.baseUrl+this.thisController+"GetA?Address="+Address); 
  }
  GetCustomerBD(BirthDate:Date){
    return this.Http.get(environment.baseUrl+this.thisController+"GetBD?BirthDate="+BirthDate); 
  }
  
 AddCustomer(am:Customer){
   return this.Http.post(environment.baseUrl+this.thisController+"Add",am);
 }
 
 
 DeleteCustomer(id:number)
 {
  return this.Http.get(environment.baseUrl+this.thisController+"Delete?id="+id)
 }

 UpdateCustomer(um:Customer)
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
