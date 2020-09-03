import { Component, OnInit,ViewChild,TemplateRef } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import{Manager}from 'src/app/Shachlav/Models/manager.models'
import { ManagerService } from 'src/app/Shachlav/Services/manager.service';
import { ManagerComponent } from '../manager/manager.component';
import { ManagerUpdateComponent } from '../manager-update/manager-update.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-manger-show',
  templateUrl: './manger-show.component.html',
  styleUrls: ['./manger-show.component.css'],
  animations: [
    trigger('detailExpand', [
      state('void', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('*', style({ height: '*', visibility: 'visible' })),
      transition('void <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ManagerShowComponent implements OnInit {
  dataSource=new MatTableDataSource<Manager>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns=['Id','IdentityNumber','FirstName','LastName','Email','PhoneNumber','CellNumber','Address','BirthDate','UserName','Password', 'EditDelete'];
  constructor(public snackbar:MatSnackBar, public ManagerService:ManagerService, private dialog: MatDialog) { }
show:boolean=false;
ManagerUpdate:Manager;
@ViewChild('deleteVT') deleteVT: TemplateRef<any>;

isExpansionDetailRow = (i: number, row: any) => row.hasOwnProperty('detailRow');

  getAllManagers(){
    // this.show=true;
    this.ManagerService.GetAllManagers().subscribe(suc=>{this.dataSource.data=[...suc];console.log(this.dataSource.data);this.show=true;},err=>{console.log("error")});
    // console.log(this.dataSource.data);
  }

   //filter
   applyFilter(filterValue: string) {
     console.log(filterValue);
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
        this.ManagerService.DeleteManager(row.Id).subscribe(suc=>{this.snackbar.open('מנהל הוסר מהמערכת',null,{duration:3000}); this.dataSource.data = this.dataSource.data.filter(function(el) { return el.Id != row.Id; }); },
        err=>{this.snackbar.open('שגיאה, נסה מאוחר יותר',null,{duration:3000})});
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
    result.value.Email,
    result.value.PhoneNumber,
    result.value.CellNumber,
    result.value.Address,
    result.value.BirthDate,
    result.value.UserName,
    result.value.Password);

        // console.log(this.ManagerUpdate);
        this.ManagerService.UpdateManager(this.ManagerUpdate).subscribe(suc=> {this.getAllManagers();this.snackbar.open('פרטי מנהל עודכנו במערכת',null,{duration:3000}); this.dataSource.data = this.dataSource.data.filter(function(el) { return el.Id != row.Id; }); },
        err=>{this.snackbar.open('שגיאה, נסה מאוחר יותר',null,{duration:3000})});
      
          
      }
 })

}
}

}

  ngOnInit(){
    this.show=false;
  this. getAllManagers();
  this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

}
