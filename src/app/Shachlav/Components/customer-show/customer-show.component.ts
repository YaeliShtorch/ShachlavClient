import { Component, OnInit, ViewChild, TemplateRef} from '@angular/core';
import{Customer}from 'src/app/Shachlav/Models/customer.models'
import { CustomerService } from 'src/app/Shachlav/Services/customer.service';
import { CustomerUpdateComponent } from '../customer-update/customer-update.component';
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-customer-show',
  templateUrl: './customer-show.component.html',
  styleUrls: ['./customer-show.component.css']
})
export class CustomerShowComponent implements OnInit {
  dataSource=new MatTableDataSource<Customer>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns=['Id','IdentityNumber','FirstName','LastName','BusinessCode','CompanyName','Email','PhoneNumber','CellNumber','Address','BirthDate','UserName','Password', 'EditDelete'];
  show:boolean=false;
  CustomerUpdate:Customer;

  @ViewChild('deleteVT') deleteVT: TemplateRef<any>;


  constructor(public customerService:CustomerService,private dialog: MatDialog) { }

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

  openDialog(action,row){
    console.log(row);
    //check if to open dialog
    if(row!==undefined){
      if(action==="delete")
      {
 let dialogRef = this.dialog.open(this.deleteVT);
 dialogRef.afterClosed().subscribe(result => {
     // Note: If the user clicks outside the dialog or presses the escape key, there'll be no result
     if (result !== undefined) {
         if (result === true) {
             console.log(row.Id);
        this.customerService.DeleteCustomer(row.Id).subscribe(suc=>{console.log("done"); this.dataSource.data = this.dataSource.data.filter(function(el) { return el.Id != row.Id; }); },err=>console.log("failed"));
         } 
         
     }
})
} else if(action ==='edit'){
  let dialogRef = this.dialog.open(CustomerUpdateComponent,{
    height: '700px',
    width:'400px',
      data:{
        passData:row
      }
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log(result)
      //Note: If the user clicks outside the dialog or presses the escape key, there'll be no result
      if (result !== undefined) {
    this.CustomerUpdate=new Customer(row.Id,result.value.IdentityNumber,
      result.value.FirstName,
      result.value.LastName,
      result.value.CompanyName,
      result.value.BusinessCode,
      result.value.Email,
      result.value.PhoneNumber,
      result.value.CellNumber,
      result.value.Address,
      result.value.UserName,
      result.value.Password, 
      result.value.BirthDate)

        // console.log(this.ManagerUpdate);
        this.customerService.UpdateCustomer(this.CustomerUpdate).subscribe(suc=> this.getAllCustomers());
      
          
      }
 })

}
}

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
