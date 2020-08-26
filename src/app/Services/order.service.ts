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
 GetAllOrders()
 {
  return this.Http.get(environment.baseUrl+this.thisController+"GetAll")
 }
 GetOrdersTwoMonthAgo(){
  return this.Http.get(environment.baseUrl+this.thisController+"GetOrdersTwoMonthAgo")
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
 AddClay(m:Material){
  return this.Http.post(environment.baseUrl+this.thisController+"AddClay",m);
 }
 AddVehicleType(m:Material){
  return this.Http.post(environment.baseUrl+this.thisController+"AddVehicleType",m);
 }
 AddExposue(m:Material){
  return this.Http.post(environment.baseUrl+this.thisController+"AddExposue",m);
 }
 AddDeep(m:Material){
  return this.Http.post(environment.baseUrl+this.thisController+"AddDeep",m);
 }
 AddExtension(m:Material){
  return this.Http.post(environment.baseUrl+this.thisController+"AddExtension",m);
 }
 AddConcDesc(m:Material){
  return this.Http.post(environment.baseUrl+this.thisController+"AddConcDesc",m);
 }
 AddConcrete(m:Material){
  return this.Http.post(environment.baseUrl+this.thisController+"AddConcrete",m);
 }

}
