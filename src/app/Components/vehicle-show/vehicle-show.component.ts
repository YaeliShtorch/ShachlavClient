import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Vehicle } from 'src/app/Models/vehicle.models';
import {VehicleService } from 'src/app/services/vehicle.service';
import { DriverService } from 'src/app/services/driver.service';
import { Driver } from 'src/app/Models/driver.models';

@Component({
  selector: 'app-vehicle-show',
  templateUrl: './vehicle-show.component.html',
  styleUrls: ['./vehicle-show.component.css']
})
export class VehicleShowComponent implements OnInit {
  dataSource=new MatTableDataSource<Vehicle>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns=['Id','Description','PumpTypeId','PipesLength','DriverId','MixerNumber'];
  show:boolean=false;
  PumpTypeArr=[];
  driver;

  constructor(public vehicleService:VehicleService, public driverService:DriverService) { }
  getAllVehicles(){
    // this.show=true;
    this.vehicleService.GetAllVehicles().subscribe(suc=>{this.dataSource.data=[...suc];console.log(this.dataSource.data);this.show=true;},err=>{console.log("error")});
    // console.log(this.dataSource.data);
  }

   //filter
   applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getPumpTypeName(pumpId){
    if(pumpId!=0){
     return this.PumpTypeArr.find(x=>x.Id==pumpId).PType;
    }else{
      return "no Pump";
    }
      }

  getDriverName(driverId)
  {
  if(driverId!=0){
    this.driverService.GetDriverId(driverId).subscribe(suc=>{this.driver=suc});
    return this.driver.FirstName + " "+this.driver.LastName;
  }
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }

  ngOnInit(){
    this.show=false;
    this.vehicleService.GetAllPumpTypes().subscribe(suc=>{this.PumpTypeArr=suc}, err=>console.log("err"));
  this.getAllVehicles();

  }

}