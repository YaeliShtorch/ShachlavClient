import { Component, OnInit, ViewChild } from '@angular/core';
import{CustomerService}from "../../services/customer.service";
import{Customer}from "../../models/customer.models";
import { DatePipe } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { OrderComponent } from '../order/order.component';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  panelOpenState = false;
  step = 0;
  activatedRoute: any;
  orderPath:string;


  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

 
  constructor(public customerService:CustomerService,public route:Router) {
  //  this.currentUser=this.userservice.getCurrentUser();
   }
  
   pipe = new DatePipe('en-US');
   now = Date.now();

  //  sidenavBar-stabilitz
  //  opened:boolean;
  //    toggleMenu(){
   
  //      this.opened = !this.opened;
  //    }


  //  c:Customer= new Customer(null,"22255","Sam","Fishman","Taldor","5","sam55@gmail.com","0365421","0527778120","Shaked 5 Ramat Gan",null);
   user=[1,2,3,4]
   
   openOrders(){
     alert("open orders");
   }




  ngOnInit() {
  }

}
