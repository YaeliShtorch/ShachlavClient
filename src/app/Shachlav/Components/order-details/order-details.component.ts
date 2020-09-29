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
  // Element=new FormControl();
  // Amount=new FormControl();
  CategoryId;
  @Input() material:MaterialTypeOrder;
  @Output() newItemEvent= new EventEmitter<MaterialTypeOrder>();
  constructor(private fb:FormBuilder,public orderService:OrderService ) { }


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
      Element:[this.material.Element,Validators.required],    
      Amount:[this.material.Amount, Validators.required],
      StatusMaterialId:[''],
      MaterialId:[this.material.MaterialId, Validators.required],
      PipeLength:[this.material.PipeLength],
      // CategoryId:[this.material.CategoryId],
    
    });

    // this.OnChanges();

  
  }



  setVal(event){

  }

  selected(i){
    this.CategoryId=i;
    this.EzerMaterialL=this.MaterialL.filter(el=>el.MaterialCategoryId==i);
  
  }

  ngOnChanges(){


  }

  OnChanges(){
    // this.newOrderDetailsForm.valueChanges.subscribe(val=>{
    //   const materialOrder={
    //     ...this.newOrderDetailsForm.value
    //   }
    //   materialOrder["CategoryId"]=this.CategoryId;
    //   this.newItemEvent.emit(materialOrder);
     
    // })
  }
  

  selectedMaterial(){
  

    if(this.newOrderDetailsForm.valid==true){
      const materialOrder={
        ...this.newOrderDetailsForm.value
      }
  
      // console.log("check obj", materialOrder);
      //גם בSERVER
       //materialOrder["StatusMaterialId"]=1;
       //אולי לא צריך חוזר על עצמו
      // materialOrder["CategoryId"]=this.CategoryId;
      this.newItemEvent.emit(materialOrder);
      }
  }

  selectMayko(material){

    if(material['Name'].includes('מייקו')==true) this.show=true;
    else this.show=false;
  }


}



