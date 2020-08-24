import { Component, OnInit,ViewChild,TemplateRef } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
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
  displayedColumns=['Id','IdentityNumber','FirstName','LastName','Email','PhoneNumber','CellNumber','Address','BirthDate','UserName','Password','delete'];
  constructor(public ManagerService:ManagerService, private dialog: MatDialog) { }
show:boolean=false;
@ViewChild('deleteVT') deleteVT: TemplateRef<any>;

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

  openDialog(row){
    //check if to open dialog
    if(row!==undefined){
 console.log(row);
 let dialogRef = this.dialog.open(this.deleteVT);
 dialogRef.afterClosed().subscribe(result => {
     // Note: If the user clicks outside the dialog or presses the escape key, there'll be no result
     if (result !== undefined) {
         if (result === true) {
             console.log(row.Id);
        this.ManagerService.DeleteManager(row.Id).subscribe(suc=>{console.log("done"); this.dataSource.data = this.dataSource.data.filter(function(el) { return el.Id != row.Id; }); },err=>console.log("failed"));
         } 
     }
})
}
}

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }

  ngOnInit(){
    this.show=false;
  this. getAllManagers();

  }

}
