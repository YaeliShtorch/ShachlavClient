import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Material } from 'src/app/Shachlav/Models/material.models';
import { OrderService } from 'src/app/Shachlav/services/order.service';

@Component({
  selector: 'app-order-concrete',
  templateUrl: './order-concrete.component.html',
  styleUrls: ['./order-concrete.component.css']
})
export class OrderConcreteComponent implements OnInit {

  // newConcreteForm:FormGroup;
  // ConcreteType:Array<Material>;
  // ConcDesc:Array<Material>;
  // Deep:Array<Material>;
  // Exposure:Array<Material>;
  // Extention:Array<Material>;
  // Order:Array<Material>=new Array<Material>();
  // constructor(private fb:FormBuilder,private orderService:OrderService ) { }
  ngOnInit(): void {
    // this.ConcreteType=new Array<Material>();
    // this.ConcDesc=new Array<Material>();
    // this.Deep=new Array<Material>();
    // this.Exposure=new Array<Material>();
    // this.Extention=new Array<Material>();
    // this.orderService.GetConcrete().subscribe(
    //   suc=>{
    //     this.ConcreteType=(suc as Array<Material>);  
    //   },
    //   err=>{console.log("errGetConcreteType")})
    // ;
    // this.orderService.GetConcDesc().subscribe(
    //   suc=>{
    //     this.ConcDesc=(suc as Array<Material>);  
    //   },
    //   err=>{console.log("errGetConcDesc")})
    // ;
    // this.orderService.GetDeep().subscribe(
    //   suc=>{
    //     this.Deep=(suc as Array<Material>);  
    //   },
    //   err=>{console.log("errGetDeep")})
    // ;
    // this.orderService.GetExposue().subscribe(
    //   suc=>{
    //     this.Exposure=(suc as Array<Material>);  
    //   },
    //   err=>{console.log("errGetExposure")})
    // ;
    // this.orderService.GetExtension().subscribe(
    //   suc=>{
    //     this.Extention=(suc as Array<Material>);  
    //   },
    //   err=>{console.log("errGetExtention")})
    // ;
    // this.newConcreteForm = this.fb.group({
    //   ConcreteType: [''],
    //   ConcDesc: [''],
    //   Deep: [''],
    //   Exposure: [''],
    //   Extention: ['']
    // });
  }
//   @Output() addOrderDetails = new EventEmitter<{data:Array<Material>,Type:string}>();
// change(){

//   this.Order[0]=this.ConcreteType[this.newConcreteForm.value.ConcreteType];
//   this.Order[1]=this.ConcDesc[this.newConcreteForm.value.ConcDesc];  
//   this.Order[2]=this.Deep[this.newConcreteForm.value.Deep];
//   this.Order[3]=this.Exposure[this.newConcreteForm.value.Exposure];
//   this.Order[4]=this.Extention[this.newConcreteForm.value.Extention];
//   this.addOrderDetails.emit({data:this.Order,Type:"Concrete"});
// }
}
