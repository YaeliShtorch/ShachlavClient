import { Component, OnInit,ViewChild,TemplateRef } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import{Manager}from 'src/app/Models/manager.models'
import { ManagerService } from 'src/app/Services/manager.service';
import { ManagerComponent } from '../manager/manager.component';
import { ManagerUpdateComponent } from '../manager-update/manager-update.component';


@Component({
  selector: 'app-manger-show',
  templateUrl: './manger-show.component.html',
  styleUrls: ['./manger-show.component.css']
})
export class ManagerShowComponent implements OnInit {
  dataSource=new MatTableDataSource<Manager>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns=['Id','IdentityNumber','FirstName','LastName','Email','PhoneNumber','CellNumber','Address','BirthDate','UserName','Password','EditDelete'];
  constructor(public ManagerService:ManagerService, private dialog: MatDialog) { }
show:boolean=false;
ManagerUpdate:Manager;
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

  

  openDialog(action,row){
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
        this.ManagerService.DeleteManager(row.Id).subscribe(suc=>{console.log("done"); this.dataSource.data = this.dataSource.data.filter(function(el) { return el.Id != row.Id; }); },err=>console.log("failed"));
         } 
         
     }
})
} else if(action ==='edit'){
  let dialogRef = this.dialog.open(ManagerUpdateComponent,{
      data:{
        passData:row
      }
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log(result);
      //Note: If the user clicks outside the dialog or presses the escape key, there'll be no result
      if (result !== undefined) {
    this.ManagerUpdate=new Manager(row.Id,result.value.IdentityNumber,
    result.value.FirstName,
    result.value.LastName,
    result.value.Address,
    result.value.Email,
    result.value.PhoneNumber,
    result.value.CellNumber,
    result.value.BirthDate,
    result.value.UserName,
    result.value.Password);

        // console.log(this.ManagerUpdate);
        this.ManagerService.UpdateManager(this.ManagerUpdate).subscribe(suc=> this.getAllManagers());
      
          
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
  this. getAllManagers();

  }

}
