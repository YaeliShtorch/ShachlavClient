import { Component } from '@angular/core';


@Component({
    selector:'app-dialog-box',
    template:`<h1 mat-dialog-title> עריכת הזמנה</h1>
    <mat-form-field>
    <mat-label>תאריך הזמנה</mat-label>
    <textarea matInput placeholder="Ex. It makes me feel..."></textarea></mat-form-field>
    <mat-dialog-actions>
    <button mat-button [mat-dialog-close]='true'> שמירה</button>
    </mat-dialog-actions>
    `
})
export class DialogBoxComponent{

}