import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { orderViewDTO } from '../../Models/orderViewDTO.models';
import { DriverService } from '../../Services/driver.service';
@Component({
  selector: 'vex-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.scss']
})
export class OrderDialogComponent implements OnInit {
saveChange:orderViewDTO;
  updateOrderForm: any;
  constructor(@Inject(MAT_DIALOG_DATA) public passObj: any, private fb:FormBuilder) { }

  saveItem(event){
    this.saveChange=event;
  }

  closeDialog(){
  
  }

    validation(){
      // this.updateOrderForm = this.fb.group({
      //   SiteAdress: [this.order.SiteAdress, Validators.required],
      //   CustomerName: [''],
      //   OrderDate: [this.order.OrderDate,new Date()],
      //   OrderDueDate: [this.order.OrderDueDate,Validators.required],
      //   StartTime: [this.order.StartTime,Validators.required],
      //   EndTime: [this.order.EndTime,Validators.required],
      //   IsApproved: [this.order.IsApproved],
      //   IsDone: [this.order.IsDone],
      //   ManagerComment: [this.order.ManagerComment],
      //   ConcreteTest: [this.order.ConcreteTest],
      //   Comment: [this.order.Comment],
      //   MaterialOrderL: [this.order.MaterialOrderL,Validators.required],
  
  
      // });
  }
  ngOnInit(): void {
  }

}
