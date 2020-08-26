import{Component}from '@angular/core'
import { VehicleService } from 'src/app/services/vehicle.service';
import {  PumpType } from 'src/app/Models/pumpType.model';
import { TemplateRef, ViewChild } from '@angular/core';
import{MatDialog}from'@angular/material'

@Component({
    selector:'app-vehicle-type',
    template: `<mat-card>
    <mat-card-title style="color:rgb(15, 0, 15);">סוג  כלי רכב</mat-card-title>
   <mat-card-content>
   <div fxLayout="column" fxLayoutAlign="center center"  autocomplete="off">

   <mat-label style="color:primery">תצוגת כלי רכב</mat-label>
  
   <mat-form-field>
   <mat-select #vTSelected>
   <mat-option *ngFor="let pVehicle of pTypes" [value]="pVehicle">{{pVehicle.PType}}</mat-option>
   </mat-select>
   </mat-form-field>
   
    <mat-form-field>
    <mat-label>הכנס סוג כלי רכב או אורך צינור</mat-label>
    <input type="text" matInput [(ngModel)]="this.pT.PType" required #newType>
    </mat-form-field>
    <button mat-raised-button  color="primary" (click)="addPumpType(newType.value)">  הוספת סוג כלי רכב</button> <br>
    <button mat-raised-button  color="primary" (click)="deletePumpType(vTSelected.value)" style="float:left">  הסרת סוג כלי רכב</button>
    </div>
    </mat-card-content>
  </mat-card>
  
  <ng-template #deleteVT>
  <mat-dialog-content> <p>האם למחוק כלי רכב זה?</p></mat-dialog-content>
  <mat-dialog-actions>
  <button mat-button [mat-dialog-close]='true' color="primary"> כן</button>
  <button mat-button [mat-dialog-close]='false' color="primary"> לא</button>
  </mat-dialog-actions>
  </ng-template>`  

    })
export class AddVehicleTypeComponent{
    pT:PumpType= new PumpType(-1,"");
    pTypes=[];

    @ViewChild('deleteVT') deleteVT: TemplateRef<any>;

    constructor(public vehicleService:VehicleService, public dialog:MatDialog){
    }

//add pumpVehicle type
    addPumpType(pNew){
        if(pNew!=undefined){
            this.pT.PType=pNew;
         this.vehicleService.AddPumpType(this.pT).subscribe(suc=>{alert("עודכן בהצלחה"); },err=>{alert("בעיית התחברות")});
        }
    }

    deletePumpType(selected){
        //check if to open dialog
        if(selected!==undefined){
     let dialogRef = this.dialog.open(this.deleteVT);
     dialogRef.afterClosed().subscribe(result => {
         // Note: If the user clicks outside the dialog or presses the escape key, there'll be no result
         if (result !== undefined) {
             if (result === true) {
            this.vehicleService.DeletePumpType(selected.Id).subscribe(suc=>{console.log("done");this.pTypes.filter(function(){el=> el != selected});},err=>console.log("failed"));
             } 
         }
    })
}
}

    ngOnInit(){
      this.vehicleService.GetAllPumpTypes().subscribe(suc=>{this.pTypes=suc;});
    }

}
