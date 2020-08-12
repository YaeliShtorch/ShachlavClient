import { Component,Inject } from '@angular/core';
import{MAT_DIALOG_DATA}from '@angular/material'
import { Order } from 'src/app/models/order.models';


@Component({
    selector:'app-dialog-box',
    template:`<div *ngIf="this.passObj.passAction==='edit'" fxLayout="column" fxLayoutAlign="center" >
    <h1 mat-dialog-title> עריכת הזמנה</h1>
    <mat-form-field>
    <mat-label>תאריך הזמנה</mat-label>
    <input type="text" matInput placeholder="{{this.passObj.passData.OrderTime|date }}" [(ngModel)]="this.passObj.passData.OrderTime">
    </mat-form-field>
    <mat-form-field>
    <mat-label>כתובת הזמנה</mat-label>
    <input type="text" matInput placeholder="{{this.passObj.passData.SiteAdress}}" [(ngModel)]="this.passObj.passData.SiteAdress">
    </mat-form-field>
    <mat-checkbox [(ngModel)]="this.passObj.passData.PumpNeeded" color="primary"><mat-label>כולל משאבה</mat-label></mat-checkbox>
    <mat-form-field>
    <mat-label>סוג משאבה</mat-label>
    <input type="text" matInput placeholder="{{this.passObj.passData.PumpType}}" [(ngModel)]="this.passObj.passData.PumpType">
    </mat-form-field>
    <mat-form-field>
    <mat-label>שעת התחלת שימוש</mat-label>
    <input type="text" matInput placeholder="{{this.passObj.passData.StartTime}}" [(ngModel)]="this.passObj.passData.StartTime">
    </mat-form-field>
    <mat-form-field>
    <mat-label>שעת סיום שימוש</mat-label>
    <input type="text" matInput placeholder="{{this.passObj.passData.EndTime}}" [(ngModel)]="this.passObj.passData.EndTime">
    </mat-form-field>
    <mat-checkbox [(ngModel)]="this.passObj.passData.ConcreteCheck" color="primary"> <mat-label>בדיקת בטון</mat-label></mat-checkbox>
    <mat-dialog-actions>
    <button mat-button [mat-dialog-close]='this.passObj'> שמירה</button>
    </mat-dialog-actions>
    </div>
    <div *ngIf="this.passObj.passAction==='delete'">
    <mat-dialog-content> <p>האם למחוק הזמנה?</p></mat-dialog-content>
    <mat-dialog-actions>
    <button mat-button [mat-dialog-close]='true'> כן</button>
    <button mat-button [mat-dialog-close]='false'> לא</button>
    </mat-dialog-actions>
    </div>
    `
})
export class DialogBoxComponent{
    constructor( @Inject(MAT_DIALOG_DATA) public passObj:any){
 
    }
    ngOnInit(){
  console.log(this.passObj);

    }

}