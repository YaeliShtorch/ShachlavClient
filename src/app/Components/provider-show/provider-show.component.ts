import { Component, OnInit,ViewChild, TemplateRef } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import{Provider}from 'src/app/Models/provider.models'
import { ManagerService } from 'src/app/Services/manager.service';
import { ProviderComponent } from '../provider/provider.component';
import { ProviderService } from 'src/app/services/provider.service';
import { ProviderUpdateComponent } from '../provider-update/provider-update.component';

@Component({
  selector: 'app-provider-show',
  templateUrl: './provider-show.component.html',
  styleUrls: ['./provider-show.component.css']
})
export class ProviderShowComponent implements OnInit {
  dataSource=new MatTableDataSource<Provider>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  //  'Comments'
  displayedColumns=['Id','CompanyName','CompanyCode','Address','PhoneNumber','CellNumber','Email','UserName','Password', 'EditDelete'];
  show:boolean=false;
  @ViewChild('deleteVT') deleteVT: TemplateRef<any>;
  updateProvider:Provider;

  
  constructor(public providerService:ProviderService, private dialog:MatDialog) { }

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
        this.providerService.DeleteProvider(row.Id).subscribe(suc=>{console.log("done"); this.dataSource.data = this.dataSource.data.filter(function(el) { return el.Id != row.Id; }); },err=>console.log("failed"));
         } 
         
     }
})
} else if(action ==='edit'){
  let dialogRef = this.dialog.open(ProviderUpdateComponent,{
      data:{
        passData:row
      }
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log(result);
      //Note: If the user clicks outside the dialog or presses the escape key, there'll be no result
      if (result !== undefined) {
    this.updateProvider=new Provider(row.Id,
    result.value.CompanyCode,
    result.value.CompanyName,
    result.value.Address,
    result.value.PhoneNumber,
    result.value.CellNumber,
    result.value.Email,
    result.value.UserName,
    result.value.Password,
    result.velue.Comments,
    result.value.IsActive


    // result.value.Comments);
    )
        this.providerService.UpdateProvider(this.updateProvider).subscribe(suc=> this.getAllProviders());
      
          
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
  this. getAllProviders();

  }
}


