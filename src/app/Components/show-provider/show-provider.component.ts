import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import{Provider}from 'src/app/Models/provider.models'
import { ManagerService } from 'src/app/Services/manager.service';
import { ProviderComponent } from '../provider/provider.component';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-show-provider',
  templateUrl: './show-provider.component.html',
  styleUrls: ['./show-provider.component.css']
})
export class ShowProviderComponent implements OnInit {
  dataSource=new MatTableDataSource<Provider>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns=['Id','CompanyName','CompanyCode','Address','Email','PhoneNumber','CellNumber','UserName','Password', 'Comments'];
  show:boolean=false;

  
  constructor(public providerService:ProviderService) { }

  getAllProviders(){
    // this.show=true;
    this.providerService.GetAllProviders().subscribe(suc=>{this.dataSource.data=[...suc];console.log(this.dataSource.data);this.show=true;},err=>{console.log("error")});
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
  this. getAllProviders();

  }
}


