import { Component,Inject } from '@angular/core';
import{MAT_DIALOG_DATA}from '@angular/material'
import { Order } from 'src/app/models/order.models';
import * as moment from 'moment';


@Component({
    selector:'app-dialog-box',
    template:`<div *ngIf="this.passObj.passAction==='edit'" fxLayout="column" fxLayoutAlign="center" style="margin:40px; width:300px">
    <h1 mat-dialog-title> עריכת הזמנה</h1>
    <br>
    <mat-form-field>
    <mat-label>(כתובת הזמנה (עיר, רחוב ומיקוד</mat-label>
    <input type="text" matInput placeholder="{{this.passObj.passData.SiteAdress}}" [(ngModel)]="this.passObj.passData.SiteAdress" required>
    </mat-form-field>
    <mat-form-field>
    <mat-label>אלמנט</mat-label>
    <input type="text" matInput placeholder="{{this.passObj.passData.Element}}" [(ngModel)]="this.passObj.passData.Element" required>
    </mat-form-field>
    <mat-checkbox [(ngModel)]="this.passObj.passData.PumpNeeded" color="primary"><mat-label>כולל משאבה</mat-label></mat-checkbox>
    <mat-form-field>
    <mat-label>סוג משאבה</mat-label>
    <input type="text" matInput placeholder="{{this.passObj.passData.PumpType}}" [(ngModel)]="this.passObj.passData.PumpType">
    </mat-form-field>
    <mat-form-field>
    <mat-label>שעת התחלת שימוש</mat-label>
    <input type="text" matInput placeholder="{{this.passObj.passData.StartTime}}" [(ngModel)]="this.passObj.passData.StartTime" required onfocusout="checkDate()">
    </mat-form-field>
    <mat-form-field>
    <mat-label>שעת סיום שימוש</mat-label>
    <input type="text" matInput placeholder="{{this.passObj.passData.EndTime}}" [(ngModel)]="this.passObj.passData.EndTime" required>
    </mat-form-field>
    <mat-checkbox [(ngModel)]="this.passObj.passData.ConcreteCheck" color="primary"> <mat-label>בדיקת בטון</mat-label></mat-checkbox>
    <mat-dialog-actions>
    <mat-label style="color:red">שים לב בעת שמירה תאריך ההזמנה ישתנה לתאריך של היום  וכן יש לאשר את ההזמנה מחדש*.  </mat-label>
    <button mat-button [mat-dialog-close]='this.passObj' color="primary"> שמירה</button>
    <button mat-button [mat-dialog-close]='false' color="primary"> ביטול</button>
    </mat-dialog-actions>
    </div>
    <div *ngIf="this.passObj.passAction==='delete'">
    <mat-dialog-content> <p>האם למחוק הזמנה?</p></mat-dialog-content>
    <mat-dialog-actions>
    <button mat-button [mat-dialog-close]='true' color="primary"> כן</button>
    <button mat-button [mat-dialog-close]='false' color="primary"> לא</button>
    </mat-dialog-actions>
    </div>
    `
})
export class DialogBoxComponent{
    constructor( @Inject(MAT_DIALOG_DATA) public passObj:any){
           passObj.passData.OrderDate = moment(passObj.passData.OrderDate).format('MM/DD/YYYY');
    }

    checkDate(){
      alert("check it blurs");
     var dateFormat=moment.locales();
    }
    ngOnInit(){
  console.log(this.passObj);

    }

}