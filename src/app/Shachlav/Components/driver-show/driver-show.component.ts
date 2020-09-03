import { Component, OnInit,ViewChild, TemplateRef } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import{Driver}from 'src/app/Shachlav/Models/driver.models'
import { DriverService } from 'src/app/Shachlav/Services/driver.service';
import { DriverUpdateComponent } from '../driver-update/driver-update.component';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-driver-show',
  templateUrl: './driver-show.component.html',
  styleUrls: ['./driver-show.component.css'],
  animations: [
    trigger('detailExpand', [
      state('void', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('*', style({ height: '*', visibility: 'visible' })),
      transition('void <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DriverShowComponent implements OnInit {
  dataSource=new MatTableDataSource<Driver>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns=['Id','IdentityNumber','FirstName','LastName','Email','PhoneNumber','CellNumber','Address','BirthDate','EntryToWorkDate','UserName','Password','IsActive', 'EditDelete'];
  DriverUpdate:Driver;
  show:boolean=false;
  constructor(public driverService:DriverService, private dialog:MatDialog) { }
  @ViewChild('deleteVT') deleteVT: TemplateRef<any>;

  isExpansionDetailRow = (i: number, row: any) => row.hasOwnProperty('detailRow');

  getAllDrivers(){
    // this.show=true;
    this.driverService.GetAllDrivers().subscribe(suc=>{this.dataSource.data=[...suc];console.log(this.dataSource.data);this.show=true;},err=>{console.log('error')});
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
      if(action==='delete')
      {
 let dialogRef = this.dialog.open(this.deleteVT);
 dialogRef.afterClosed().subscribe(result => {
     // Note: If the user clicks outside the dialog or presses the escape key, there'll be no result
     if (result !== undefined) {
         if (result === true) {
             console.log(row.Id);
        this.driverService.DeleteDriver(row.Id).subscribe(suc=>{console.log('done'); this.dataSource.data = this.dataSource.data.filter(function(el) { return el.Id != row.Id; }); },err=>console.log('failed'));
         } 
         
     }
})
} else if(action ==='edit'){
  let dialogRef = this.dialog.open(DriverUpdateComponent,{
    // width:'400px',
      data:{
        passData:row
      }
  });
  dialogRef.afterClosed().subscribe(result => {
      //Note: If the user clicks outside the dialog or presses the escape key, there'll be no result
      if (result !== undefined) {
        console.log(row.Id);
    this.DriverUpdate=new Driver(row.Id,result.value.IdentityNumber,
      result.value.FirstName,
      result.value.LastName,
      result.value.Email,
      result.value.PhoneNumber,
      result.value.CellNumber,
      result.value.Address,
      result.value.BirthDate,
      result.value.EntryToWorkDate,
      result.value.UserName,
      result.value.Password,
      result.value.IsActive)

        // console.log(this.ManagerUpdate);
        this.driverService.UpdateDriver(this.DriverUpdate).subscribe(suc=> this.getAllDrivers());
      
          
      }
 })

}
}
}


  ngOnInit() {
    this.show=false;
    this. getAllDrivers();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}

