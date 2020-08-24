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
   <mat-option *ngFor="let pVehicle of pTypes" [value]="pVehicle.Id" >{{pVehicle.PType}}</mat-option>
   </mat-select>
   </mat-form-field>
   
    <mat-form-field>
    <mat-label>הכנס סוג כלי רכב או אורך צינור</mat-label>
    <input type="text" matInput [(ngModel)]="this.pT.PType" required #pTypeField>
    </mat-form-field>
    <button mat-raised-button  color="primary" (click)="addPumpType(pTypeField)">  הוספת סוג כלי רכב</button> <br>
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
    pT:PumpType= new PumpType(1,"");
    pTypes=[];

    @ViewChild('deleteVT') deleteVT: TemplateRef<any>;

    constructor(public vehicleService:VehicleService, public dialog:MatDialog){
    }

//add pumpVehicle type
    addPumpType(pTypeField){
        console.log(this.pT);
        if(this.pT.PType!=""){
            console.log(this.pT);
         this.vehicleService.AddPumpType(this.pT).subscribe(suc=>{alert("עודכן בהצלחה");this.vehicleService.GetAllPumpTypes().subscribe(suc=>{this.pTypes=suc;}); pTypeField.value="";},err=>{alert("בעיית התחברות")});
        }
    }

    deletePumpType(vTSelected){
        //check if to open dialog
        if(vTSelected!==undefined){
     console.log(vTSelected);
     let dialogRef = this.dialog.open(this.deleteVT);
     dialogRef.afterClosed().subscribe(result => {
         // Note: If the user clicks outside the dialog or presses the escape key, there'll be no result
         if (result !== undefined) {
             if (result === true) {
                 console.log(this.pTypes[vTSelected]);
            this.vehicleService.DeletePumpType(vTSelected).subscribe(suc=>{console.log("done"); this.pTypes = this.pTypes.filter(function(el) { return el.Id != vTSelected; }); },err=>console.log("failed"));
             } 
         }
    })
}
}

    ngOnInit(){
      this.vehicleService.GetAllPumpTypes().subscribe(suc=>{this.pTypes=suc;});
    }

}
