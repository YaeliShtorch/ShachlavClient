import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Vehicle } from '../Models/vehicle.models';
import{PumpType} from '../Models/pumpType.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  thisController:string="Vehicle/";



  constructor(public Http:HttpClient) {

   }

  GetAllVehicles():Observable<Vehicle[]>{
    return this.Http.get<Vehicle[]>(environment.baseUrl+this.thisController+"GetAll");
  }

  AddVehicle(v:Vehicle){
    return this.Http.post(environment.baseUrl+this.thisController+"AddVehicle",v);
  }

  GetAllPumpTypes():Observable<string[]>{
    return this.Http.get<string[]>(environment.baseUrl+this.thisController+"getAllPumpTypes");
  }

  AddPumpType(pT:PumpType){
    return this.Http.post(environment.baseUrl+this.thisController+"AddPumpType",pT);
  }

  DeletePumpType(id:number){
  return this.Http.get(environment.baseUrl+this.thisController+"DeletePumpType?id="+id);
  }

  getPumpTypeName(id:number){
    return this.Http.get(environment.baseUrl+this.thisController+"getPumpTypeName?id="+id)
  }

}
