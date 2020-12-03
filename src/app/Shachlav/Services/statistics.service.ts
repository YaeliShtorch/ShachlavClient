import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  
  thisController:string="Statistics/";
  constructor(public Http:HttpClient) {


}

GetOrderPCT(date:string):Observable<any[]>{
  console.log(date);
  console.log(environment.baseUrl+this.thisController+"GetOrderPCTByComp?date="+date);
  return this.Http.get<any[]>(environment.baseUrl+this.thisController+"GetOrderPCTByComp?date="+date)
}

}
