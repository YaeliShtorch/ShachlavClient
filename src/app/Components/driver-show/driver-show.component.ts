import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import{Driver}from 'src/app/Models/driver.models'
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-driver-show',
  templateUrl: './driver-show.component.html',
  styleUrls: ['./driver-show.component.css']
})
export class DriverShowComponent implements OnInit {
  dataSource=new MatTableDataSource<Driver>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns=['Id','IdentityNumber','FirstName','LastName','Email','PhoneNumber','CellNumber','Address','BirthDate','EntryToWorkDate','UserName','Password','IsActive'];

  show:boolean=false;
  constructor(public driverService:DriverService) { }

  getAllDrivers(){
    // this.show=true;
    this.driverService.GetAllDrivers().subscribe(suc=>{this.dataSource.data=[...suc];console.log(this.dataSource.data);this.show=true;},err=>{console.log("error")});
    // console.log(this.dataSource.data);
  }

   //filter
   applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }

  ngOnInit() {
    this.show=false;
    this. getAllDrivers();
  }

}

