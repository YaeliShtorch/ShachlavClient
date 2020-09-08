import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment } from 'src/environments/environment';
import {Order} from '../Models/order.models';
import { Observable } from 'rxjs';
import { Material } from '../Models/material.models';
import { MaterialTypeOrder } from '../Models/materialTypeOrder.models';
import { MaterialCategory } from '../Models/materialCategory.models';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  currentUser;
  curCustomerId;
  userOrders=new Array<Order>();
  materialL=new Array<Material>();
  categoiesL=new Array<MaterialCategory>();
  thisController:string="Order/";
  constructor(public Http:HttpClient) {

    this.Http.get<Material[]>(environment.baseUrl+this.thisController+"GetAllM").subscribe(suc=>this.materialL=suc);
    this.Http.get<MaterialCategory[]>(environment.baseUrl+this.thisController+"GetMaterialCategories").subscribe(suc=>this.categoiesL=suc);
    console.log("userLists", this.materialL,this.categoiesL)

  }
 
 GetOrder(id:number):Observable<Order>{
    return this.Http.get<Order>(environment.baseUrl+this.thisController+"GetId?id="+id)
}

 GetAllOrders():Observable<Order[]>
 {
  return this.Http.get<Order[]>(environment.baseUrl+this.thisController+"GetAll")
 }

 GetCustOrders(id:number):Observable<Order[]>
 {
   return this.Http.get<Order[]>(environment.baseUrl+this.thisController+"GetAllCO?id="+id)
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

 AddOrder(o:Order){
  return this.Http.post(environment.baseUrl+this.thisController+"AddOrder",o);
 }

 GetAllMaterial():Observable<Material[]>
 {
  return this.Http.get<Material[]>(environment.baseUrl+this.thisController+"GetAllM")
 }

 getMaterialsByCategoryName(name:string):Observable<Material[]>{

  return this.Http.get<Material[]>(environment.baseUrl+this.thisController+"getMaterialsByCategoryName")
 }

 getMaterialById(id:number):Observable<Material>
 {
  return this.Http.get<Material>(environment.baseUrl+this.thisController+"getMaterialById")
}

getMaterialByName(name:string):Observable<Material[]>{
  return this.Http.get<Material[]>(environment.baseUrl+this.thisController+"getMaterialByName")
}

DeleteMaterial(id:number){
  return this.Http.get(environment.baseUrl+this.thisController+"DeleteMaterial?id="+id)
}

AddMaterial(m:Material){
  return this.Http.post(environment.baseUrl+this.thisController+"AddMaterial",m)
}

UpdateMaterial(m:Material){
  return this.Http.post(environment.baseUrl+this.thisController+"UpdateMaterial",m)
}

getAllCategories():Observable<MaterialCategory[]>{
  return this.Http.get<MaterialCategory[]>(environment.baseUrl+this.thisController+"GetMaterialCategories")
}

addCategory(cat:MaterialCategory){
  return this.Http.post(environment.baseUrl+this.thisController+"AddMaterialCategory",cat)
}

deleteCategory(id:number){
  return this.Http.get(environment.baseUrl+this.thisController+"deleteMaterialCategory?id="+id)
}

updateCategory(cat:MaterialCategory){
  return this.Http.post(environment.baseUrl+this.thisController+"UpdateMaterialCategory",cat)
}
//  }
 
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
 GetClay(){
  return this.Http.get(environment.baseUrl+this.thisController+"GetClay");
 }
 GetVehicleType(){
  return this.Http.get(environment.baseUrl+this.thisController+"GetVehicleType");
 }
 GetExposue(){
  return this.Http.get(environment.baseUrl+this.thisController+"GetExposue");
 }
 GetDeep(){
  return this.Http.get(environment.baseUrl+this.thisController+"GetDeep");
 }
 GetExtension(){
  return this.Http.get(environment.baseUrl+this.thisController+"GetExtension");
 }
 GetConcDesc(){
  return this.Http.get(environment.baseUrl+this.thisController+"GetConcDesc");
 }
 GetConcrete(){
  return this.Http.get(environment.baseUrl+this.thisController+"GetConcrete");
 }
}
// }
