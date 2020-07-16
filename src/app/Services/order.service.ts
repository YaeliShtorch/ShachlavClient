import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment } from 'src/environments/environment';
import {Order} from '../Models/order.models';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  thisController:string="Order/";
  constructor(public Http:HttpClient) {}
 
  GetOrder(id:number){
    return this.Http.get(environment.baseUrl+this.thisController+"Get?id="+id)
  }
 AddOrder(o:Order){
   return this.Http.post(environment.baseUrl+this.thisController+"Add",o);
 }
 GetOrders()
 {
  return this.Http.get(environment.baseUrl+this.thisController+"GetAll")
 }
 
 DeleteOrder(id:number)
 {
  return this.Http.get(environment.baseUrl+this.thisController+"Delete?id="+id)
 }

 UpdateOrder(uo:Order)
 {
  return this.Http.post(environment.baseUrl+this.thisController+"Update",uo);
 }
}
