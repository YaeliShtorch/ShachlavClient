import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup,Validators, FormControl } from '@angular/forms';
import {ValidationService} from 'src/app/Shachlav/Services/validation.service'
import { DriverWork } from 'src/app/Shachlav/Models/driverWork.models'
import { Vehicle } from 'src/app/Shachlav/Models/vehicle.models';
import { DriverService } from 'src/app/Shachlav/services/driver.service';
import { OrderService } from 'src/app/Shachlav/services/order.service';
import { Material } from 'src/app/Shachlav/Models/material.models';
import { MaterialTypeOrder } from '../../Models/materialTypeOrder.models';
import { MaterialCategory } from '../../Models/materialCategory.models';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  newOrderDetailsForm: FormGroup;
  CategoryL:Array<MaterialCategory>;
  MaterialL:Array<Material>;
  EzerMaterialL:Array<Material>;
  show:boolean=false;
  Element=new FormControl();
  Amount=new FormControl();
  @Output() newItemEvent= new EventEmitter<MaterialTypeOrder>();
//  MaterialOrder:MaterialTypeOrder;
  constructor(private fb:FormBuilder,public orderService:OrderService ) { }
 
 
//  ngAfterOnInit(){

//   console.log("lists", this.CategoryL, this.MaterialL)
//  }


  ngOnInit() {
    
    this.CategoryL=this.orderService.categoiesL;
    this.MaterialL=this.orderService.materialL;
   
    this.orderService.materialLEvent.subscribe(x=>{
      this.MaterialL=x;
    });
    this.orderService.categoriesLEvent.subscribe(x=>{
      this.CategoryL=x;
    });
    this.newOrderDetailsForm = this.fb.group({
      Element:['',Validators.required],    
      Amount:['', Validators.required],
      StatusMaterialId:[''],
      MaterialId:['', Validators.required],
    
    });

  
  }

  setVal(event){

  }

  selected(i){
    this.show=false;
    console.log(this.MaterialL);;
    this.EzerMaterialL=this.MaterialL.filter(el=>el.MaterialCategoryId==i);
    this.show=true;
  
  }

  ngOnChange(){
    // if(this.newOrderDetailsForm.valid==true)

  }

  selectedMaterial(){

      if(this.newOrderDetailsForm.valid==true){
    const materialOrder={
      ...this.newOrderDetailsForm.value
    }
     materialOrder["StatusMaterialId"]=1;
    //  materialOrder["MaterialId"]=i; 
    materialOrder["MaterialId"]=this.newOrderDetailsForm.get('MaterialId').value;
  console.log(this.newOrderDetailsForm.get('MaterialId').value)
      console.log("pppppp");
      this.newItemEvent.emit(materialOrder);
    }
  }

  
  // change(){

    
  // }
// onSubmit()
// {
  
// }

// onOrderSubmitted(event:{data:Array<Material>,Type:string}){
  // if(event.Type=="Concrete"){
  //   for (let index = 0; index < 5; index++) {
  //     this.Materials[index]=event.data[index]; 
  //   }
  // }
  // else if(event.Type=="Clay")
  // this.Materials[5]=event.data[0]; 
// this.change();
  // }

// Chosen(){
  
  //this.newItemEvent.emit({OrderType:this.newOrderDetailsForm.value.OrderType,Element:this.newOrderDetailsForm.value.Element,Amount:this.newOrderDetailsForm.value.Amount,TypeId:this.Type});
//   this.change();
//   if(this.newOrderDetailsForm.value.OrderType=="Concrete"){
//   this.Concrete=true;
//   this.Clay=false;
//   }
//   else
//   if(this.newOrderDetailsForm.value.OrderType=="Clay"){
//   this.Clay=true;
//   this.Concrete=false;
//   }
//  else{
//  this.Clay=false;
//  this.Concrete=false;
//  }
// }
// title = 'demo';
// exportTime = {  minute: 15,hour: 7, meriden: 'PM', format: 24 };

// onChangeHour(event) {
//  console.log('event', event);
// }

}



