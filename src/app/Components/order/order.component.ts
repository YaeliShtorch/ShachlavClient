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
  customer:string="p";
  OrderList=new Array<Order>();
  dataSource=new MatTableDataSource<Order>();
  displayedColumns=['Id', 'OrderTime','SiteAdress','PumpNeeded','PumpType','StartTime','ConcreteCheck','Status'];
 
  constructor(public customerService:CustomerService,public orderService:OrderService, public route: Router, public activatedRoute: ActivatedRoute) { 

   
  }  
//השליפה לא נראית בטבלה
  funcGetCust(){
    // this.customerService.GetCustomerIN("123").subscribe(suc=>{ this.customer=suc.toString();console.log(this.customer)},err=>{
    //   alert("error")});
    this.orderService.getAllCustOrders(1).subscribe(suc=>{this.dataSource.data=[...suc];console.log(this.dataSource.data)},err=>{console.log("error")});
    console.log(this.dataSource.data);
  }
// getOpenOrders(){
//   alert('my open orders');
//   this.dataSource.data=this.orderService.openOrders();
//   // this.dataSource.data=this.orderService.openOrdersbyUserId();
//   console.log(this.dataSource.data);
 
// }

// getAllOrders(){
//   alert('all orders');
//   this.dataSource.data=this.orderService.userOrdersbyUserId();
//   console.log(this.dataSource.data);
// }


  ngOnInit() {
   

  //this.activatedRoute.paramMap("")
  // console.log(this.activatedRoute.snapshot.routeConfig.path.split('/')[1]);

    // this.activatedRoute.params.subscribe(params=>
    //   {this.orderFunc=this.activatedRoute.snapshot.routeConfig.path.split('/')[1];
    //   if(this.orderFunc.match('openOrders'))
    //   this.getOpenOrders();
    //   if(this.orderFunc.match('allOrders'))
    //   this.getAllOrders();
     
    // });

   
   
   
  }

}

