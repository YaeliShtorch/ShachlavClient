import { Component, OnInit, Input } from '@angular/core';
import{Order} from '../../models/order.models';
import { UsersService } from 'src/app/services/users.service';
import { OrderService } from 'src/app/services/order.service';
import{Router, ActivatedRoute}from '@angular/router'
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/Models/customer.models';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  currentUser;
  // userOrders=new Array<Order>();
  orderFunc="";
  orderNum:number;
  show:boolean=true;
  customer:string="p";
  OrderList=new Array<Order>();
  dataSource=new MatTableDataSource<Order>();
  displayedColumns=['Id', 'OrderTime','SiteAdress','PumpNeeded','PumpType','StartTime','ConcreteCheck','Status'];
 
  constructor(public customerService:CustomerService,public orderService:OrderService, public route: Router, public activatedRoute: ActivatedRoute) { 

   
  }  

  getAllOrders(){

    // this.customerService.GetCustomerIN("123").subscribe(suc=>{ this.customer=suc.toString();console.log(this.customer)},err=>{
    //   alert("error")});
    //קבלת הזמנות של לקוח שהID שלו 1
  
    this.show=true;
    this.orderService.getAllCustOrders(1).subscribe(suc=>{this.dataSource.data=[...suc];console.log(this.dataSource.data)},err=>{console.log("error")});
    console.log(this.dataSource.data);
  }

  getOrderbyId(){
  //לבדוק שמביא רק הזמנה של הלקוח הקיים
    this.show=false;
  }
  getOrderbyId2(){
    this.orderService.GetOrder(this.orderNum).subscribe(suc=>{this.dataSource.data=[];this.dataSource.data.push(suc);console.log(this.dataSource.data); this.show=true;}, err=>console.log("error"));
  }



  ngOnInit() {
   

  //this.activatedRoute.paramMap("")
  // console.log(this.activatedRoute.snapshot.routeConfig.path.split('/')[1]);

    this.activatedRoute.params.subscribe(params=>
      {this.orderFunc=this.activatedRoute.snapshot.routeConfig.path.split('/')[1];
      if(this.orderFunc.match('getAllOrders()'))
      this.getAllOrders();
      if(this.orderFunc.match('getOrderbyId()'))
      this.getOrderbyId();
     
    });

   
   
   
  }

}

