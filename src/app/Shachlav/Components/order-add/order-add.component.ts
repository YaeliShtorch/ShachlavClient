import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidationService } from 'src/app/Shachlav/Services/validation.service'
import { DriverWork } from 'src/app/Shachlav/Models/driverWork.models'
import { Vehicle } from 'src/app/Shachlav/Models/vehicle.models';
import { DriverService } from 'src/app/Shachlav/services/driver.service';
import { OrderService } from 'src/app/Shachlav/services/order.service';
import { Order } from 'src/app/Shachlav/models/order.models';
import { MaterialTypeOrder } from 'src/app/Shachlav/Models/materialTypeOrder.models';
import { Material } from 'src/app/Shachlav/Models/material.models';
import { UsersService } from 'src/app/Shachlav/services/users.service';
import { Customer } from 'src/app/Shachlav/Models/customer.models';
import { materialize } from 'rxjs/operators';
import { MaterialCategory } from '../../Models/materialCategory.models';


@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {

  constructor(private fb: FormBuilder, public orderService: OrderService, public userService: UsersService) { }
  newOrderForm: FormGroup;
  CurrentCustomer: Customer;
  PumpDetail: Array<MaterialTypeOrder> = new Array<MaterialTypeOrder>();
  OrderDetail: Array<MaterialTypeOrder> = new Array<MaterialTypeOrder>();
  ConcreteTest: boolean;
  orderDueDate = new FormControl();
  minDate = new Date(new Date().getDay() + 1);
  StartTime=new FormControl();
  EndTime=new FormControl();
  counterMaterial=[1];



  ngOnInit(): void {

    this.userService.getLoggedInUser().subscribe(suc => this.CurrentCustomer = suc);

    //למה צריך לאתחל??
    // this.PumpDetail.push(new MaterialTypeOrder(null,null,"",0,0,0));
    // this.OrderDetail.push(new MaterialTypeOrder(null,null,"",0,0,0));

    this.newOrderForm = this.fb.group({
      SiteAdress: ['', Validators.required],
      CustomerId: [''],
      OrderDate: ['',Validators.required],
      OrderDueDate: ['',Validators.required],
      StartTime: ['',Validators.required],
      EndTime: ['',Validators.required],
      IsApproved: [''],
      IsDone: [''],
      ManagerComment: [''],
      ConcreteTest: [''],
      Comment: [''],
      MaterialOrderL: ['',Validators.required],


    });

  }
  addItem(event: MaterialTypeOrder) {
    if(event)
    this.OrderDetail.push(event);
    console.log(this.OrderDetail);
    // this.OrderDetail.push(event);
    //     console.log(index,event);
    // this.OrderDetail[index].Id=event.Id;
    // this.OrderDetail[index].Name=event.Name;
    // for (let i = 0; i < event.TypeId.length; i++) {
    //   this.OrderDetail[index].TypeId[i]=event.TypeId[i];
    // }

  }
  onSubmit() {


    const order = {
      ...this.newOrderForm.value
    }
 
    order["OrderDate"] = new Date();
    order["IsApproved"] = false;
    order["IsDone"] = false;
    order["CustomerId"] = this.CurrentCustomer?.Id;
    order["MaterialOrderL"] = (this.OrderDetail);
    // order["MaterialOrderL"].push(this.PumpDetail);
    console.log("order", order);



    this.orderService.AddOrder(order).subscribe(
      suc => { console.log("great") },
      err => { console.log("errAddOrder") }
    )
  }

  checkboxVal(event) {
    this.ConcreteTest = event;
  }

  setTime(event){
    this.StartTime;
  }

  setTime2(event){
    this.EndTime
  }

  //איך זה מכפיל את הקומפוננטה?
  AddMaterial() {
this.counterMaterial.push(1); 
    //למה אובייקט ריק?
    //  this.OrderDetail.push(new MaterialTypeOrder(null,null,"",0,0,0));
  }
  RemoveMaterial() {
    this.counterMaterial.pop();
    this.OrderDetail.pop();
  }
  title = 'demo';
  exportTime = { minute: 15, hour: 7, meriden: 'PM', format: 24 };

  onChangeHour(event) {
    console.log(event);
  }


  // AddPump() {
  //   //למה אובייקט ריק?
  //   this.PumpDetail.push(new MaterialTypeOrder(null, null, "", 0, 0, 0));


  // }
  // RemovePump() {
  //   this.PumpDetail.pop();

  // }
  // addPump(event: MaterialTypeOrder, i: number) {
  //   this.PumpDetail[i] = event;
  //   console.log(event);
  //   console.log(this.PumpDetail);
  // }
}
