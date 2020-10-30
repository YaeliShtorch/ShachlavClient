import { Component, Inject, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Material } from '../../Models/material.models';
import { MaterialCategory } from '../../Models/materialCategory.models';
import { materialTypeOrderViewDTO } from '../../Models/MaterialTypeOrderView.models';
import { OrderService } from '../../Services/order.service';

@Component({
  selector: 'order-details-update',
  templateUrl: './order-details-update.component.html',
  styleUrls: ['./order-details-update.component.scss']
})
export class OrderDetailsUpdateComponent implements OnInit {
  updateOrderDetailsForm: FormGroup;
  @Input( )materialView:materialTypeOrderViewDTO;
CategoryL:Array<MaterialCategory>;
MaterialL:Array<Material>;
EzerMaterialL:Array<Material>;
showMayko:boolean=false;
showCategories:boolean=false;
  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public passObj:any, public orderService:OrderService) { }

  ngOnInit(): void {
    this.validation();

    this.CategoryL=this.orderService.categoiesL;
    this.MaterialL=this.orderService.materialL;
   
    this.orderService.materialLEvent.subscribe(x=>{
      this.MaterialL=x;
    });
    this.orderService.categoriesLEvent.subscribe(x=>{
      this.CategoryL=x;
    });
    
    console.log(this.materialView, "materialView")

  }

  
ngOnChange(changes: SimpleChanges){
  this.validation();

  console.log(this.materialView, "materialViewChange")
 
 }

 setNewMaterial(){
 this.showCategories=true;

 }

 selected(i){
 // this.CategoryId=i;
  this.EzerMaterialL=this.MaterialL.filter(el=>el.MaterialCategoryId==i);

}
selectMayko(material){
  
  if(material!=undefined)
  {
    this.updateOrderDetailsForm.controls.MaterialName.setValue(material.Name);

  if(material['Name'].includes('מייקו')==true) this.showMayko=true;
  else this.showMayko=false;
}
}


 validation(){
  this.updateOrderDetailsForm = this.fb.group({
    Element:[this.materialView.Element,Validators.required],
    Amount:[this.materialView.Amount, Validators.required],
    StatusMaterial:[this.materialView.StatusMaterial, Validators.required],
    MaterialName:[this.materialView.MaterialName, Validators.required],  
    ManagerComment:[this.materialView.ManagerComment],   
    PipeLength:[this.materialView.PipeLength],
    CategoryId:[''],
    MaterialId:[''],
 });

}

onSubmit(){
  
}
}



//   //check if it's a new material to add or update
// if(this.materialView==undefined){
//   this.newOrderDetailsForm = this.fb.group({
//     Element:[this.material.Element,Validators.required],    
//     Amount:[this.material.Amount, Validators.required],
//     StatusMaterialId:[''],
//     MaterialId:[this.material.MaterialId, Validators.required],
//     PipeLength:[this.material.PipeLength],
//     // CategoryId:[this.material.CategoryId],
  
//   });
// } else{
//   this.StatusMaterialL=this.orderService.statusMatL;
//   this.showUpdate=true;
//   this.validation();

// }

//   // this.OnChanges();
  


// }

// ngOnChange(changes: SimpleChanges){
//   if(this.updateDetailsForm!=undefined)
//   this.validation();
 
//  }

// validation(){
 
// var mat=this.MaterialL.filter(el=>el.Name.match(this.materialView.MaterialName));
// this.selected(mat[0].MaterialCategoryId);
// var status=this.StatusMaterialL.filter(el=>el.Name==this.materialView.StatusMaterial);

//  if(this.materialView.PipeLength!=undefined) this.show=true;

//   this.newOrderDetailsForm = this.fb.group({ 
//     Element:[this.materialView.Element,Validators.required],
//     Amount:[this.materialView.Amount, Validators.required],
//     StatusMaterialId:[status[0].Id, Validators.required],
//     MaterialId:[mat[0].Id, Validators.required],  
//     ManagerComment:[this.materialView.ManagerComment],   
//     PipeLength:[this.materialView.PipeLength],
//  });

// }

// onSubmit(){
//   if(this.newOrderDetailsForm.valid==true && this.materialView!=undefined){

    
//      this.material={
//       ...this.newOrderDetailsForm.value
//     }

//     this.orderService.UpdateOrderMaterial(this.material).subscribe(suc=>{
// // this.newItemEvent.emit(materialOrder);
//     });

   

// }
// }
// setVal(event){

// }

// selected(i){
//   this.CategoryId=i;
//   this.EzerMaterialL=this.MaterialL.filter(el=>el.MaterialCategoryId==i);

// }


// selectedMaterial(){


//   if(this.newOrderDetailsForm.valid==true){
//     const materialOrder={
//       ...this.newOrderDetailsForm.value
//     }

//     // console.log("check obj", materialOrder);
//     //גם בSERVER
//      //materialOrder["StatusMaterialId"]=1;
//      //אולי לא צריך חוזר על עצמו
//     // materialOrder["CategoryId"]=this.CategoryId;
//     this.newItemEvent.emit(materialOrder);
//     }
// }

// selectMayko(material){

//   if(material['Name'].includes('מייקו')==true) this.show=true;
//   else this.show=false;
// }


