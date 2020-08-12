import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment } from 'src/environments/environment';
import {Order} from '../Models/order.models';
import { Observable } from 'rxjs';
import { Material } from '../Models/material.models';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  currentUser;
  curCustomerId;
  userOrders=new Array<Order>();
  thisController:string="Order/";
  constructor(public Http:HttpClient) {}
 
 GetOrder(id:number):Observable<Order>{
    return this.Http.get<Order>(environment.baseUrl+this.thisController+"GetId?id="+id)
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

 UpdateOrder(o:Order)
 {
  return this.Http.post(environment.baseUrl+this.thisController+"Update",o);
 }

 getAllCustOrders(id:number):Observable<Order[]>{
   return this.Http.get<Order[]>(environment.baseUrl+this.thisController+"GetAllCO?id="+id);
 }
 AddMaterial(m:Material){
  return this.Http.post(environment.baseUrl+this.thisController+"AddMaterial",m);
 }
}
