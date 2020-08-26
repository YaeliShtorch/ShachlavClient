import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import{Customer}from 'src/app/Models/customer.models'
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-show',
  templateUrl: './customer-show.component.html',
  styleUrls: ['./customer-show.component.css']
})
export class CustomerShowComponent implements OnInit {
  dataSource=new MatTableDataSource<Customer>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns=['Id','IdentityNumber','FirstName','LastName','BusinessCode','CompanyName','Email','PhoneNumber','CellNumber','Address','BirthDate','UserName','Password'];
  show:boolean=false;
  constructor(public customerService:CustomerService) { }

  getAllCustomers(){
    // this.show=true;
    this.customerService.GetAllCustomers().subscribe(suc=>{this.dataSource.data=[...suc];console.log(this.dataSource.data);this.show=true;},err=>{console.log("error")});
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
  this. getAllCustomers();

  }

}
