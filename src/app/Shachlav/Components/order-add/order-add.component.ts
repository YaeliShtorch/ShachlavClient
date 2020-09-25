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
import { DateTime } from 'luxon';


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
  OrderDetail: MaterialTypeOrder[] =[new MaterialTypeOrder(0,0,"",0,0,0,"","",0)];
  ConcreteTest: boolean;
  orderDueDate = new FormControl();
  minDate = new Date(new Date().getDay() + 1);
  StartTime=new FormControl();
  EndTime=new FormControl();
  OrderDate=new FormControl();



  ngOnInit(): void {

    this.userService.getLoggedInUser().subscribe(suc => this.CurrentCustomer = suc);

    //למה צריך לאתחל??
    // this.PumpDetail.push(new MaterialTypeOrder(null,null,"",0,0,0));
    // this.OrderDetail.push(new MaterialTypeOrder(null,null,"",0,0,0));

    this.newOrderForm = this.fb.group({
      SiteAdress: ['', Validators.required],
      CustomerId: [''],
      OrderDate: ['',new Date()],
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
  addItem(event: MaterialTypeOrder,id:number) {
    console.log(event, id, this.OrderDetail)
    if(event){
    this.OrderDetail[id]=event;
    
    }
    console.log(this.OrderDetail);
  }
  onSubmit() {
    
    const order = {
      ...this.newOrderForm.value
    }

    order["IsApproved"] = false;
    order["IsDone"] = false;
    order["CustomerId"] = this.CurrentCustomer?.Id;
    order["MaterialOrderL"] = (this.OrderDetail);
    const date1=new Date(order.OrderDueDate).toLocaleDateString();
    order["OrderDueDate"]= date1;
    console.log("order", order);
console.log(date1)


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


  AddMaterial() {
// this.counterMaterial.push(1); 
console.log(this.OrderDetail);
  this.OrderDetail.push(new MaterialTypeOrder(0,0,"",0,0,0,"","",0));
  }
  RemoveMaterial(i) {
    console.log(i);
    //  const index: number = this.OrderDetail.findIndex(el=>el.MaterialId==i.MaterialId && el.Amount==i.Amount && el.Element==i.Element);
    //  console.log(index);
    // console.log(this.OrderDetail);
    // if (index !== -1) {
     
      //   this.OrderDetail.slice(index, 1);
    // } 

    this.OrderDetail=this.OrderDetail.filter(x=>x!==i);
    if(this.OrderDetail.length<1)
    this.OrderDetail.push(new MaterialTypeOrder(0,0,"",0,0,0,"","",0));
    // console.log(this.counterMaterial);
// this.OrderDetail.slice(i,1);
    // console.log(this.OrderDetail);
    // if(this.counterMaterial.length>1)
    // this.counterMaterial.pop();
    // this.OrderDetail.pop();
  }

  
  dateFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    const date=(new Date());
    // Prevent Saturday and previous dates from being selected.
    return day !== 6 && d>date;
  }

  onChangeHour(event) {
    console.log(event);
  }

}
