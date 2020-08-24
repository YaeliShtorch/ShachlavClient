import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import{Manager}from 'src/app/Models/manager.models'
import { ManagerService } from 'src/app/Services/manager.service';


@Component({
  selector: 'app-show-manger',
  templateUrl: './show-manger.component.html',
  styleUrls: ['./show-manger.component.css']
})
export class ShowMangerComponent implements OnInit {
  dataSource=new MatTableDataSource<Manager>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns=['Id','IdentityNumber','FirstName','LastName','Email','PhoneNumber','CellNumber','Address','BirthDate','UserName','Password'];
  constructor(public ManagerService:ManagerService) { }
show:boolean=false;

  getAllManagers(){
    // this.show=true;
    this.ManagerService.GetAllManagers().subscribe(suc=>{this.dataSource.data=[...suc];console.log(this.dataSource.data);this.show=true;},err=>{console.log("error")});
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

  ngOnInit(){
    this.show=false;
  this.getAllManagers();

  }

}
