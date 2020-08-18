import{Component}from '@angular/core'
import { DriverService } from 'src/app/services/driver.service';

@Component({
    selector:'app-vehicle-type',
    template: `<div style="width:400px; height:400px">

    <mat-form-field>
    <mat-label>סוג כלי רכב או אורך צינור</mat-label>
    <input type="text" matInput [(ngModel)]="vType" required>
    </mat-form-field>

    <button mat-button color="primary" click="addVehicleType()" > הוספת סוג כלי רכב</button>
    <mat-form-field appearance="fill">
    <mat-label>כלי רכב</mat-label>
    <mat-select>
    <mat-option *ngFor="let vehicle of vTypes" >{{vehicle}}</mat-option>
    </mat-select>
    </mat-form-field>
   
    </div>`  

    })
export class AddVehicleTypeComponent{
    vType:string;
    vTypes=[];


    addVehicleType(){
        if(this.vType!=null){
         this.driverService.AddVehicleType(this.vType).subscribe(suc=>alert("עודכן בהצלחה"),err=>{alert("בעיית התחברות")});
        }
    }
    constructor(public driverService:DriverService){
    }

    ngOnInit(){
      this.driverService.GetAllVehicleTypes().subscribe(suc=>{this.vTypes=suc;});
      this.vType="";
    }
}