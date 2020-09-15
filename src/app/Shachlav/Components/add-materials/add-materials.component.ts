import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';
import {ValidationService} from 'src/app/Shachlav/Services/validation.service'
import { Vehicle } from 'src/app/Shachlav/Models/vehicle.models';
import { OrderService } from 'src/app/Shachlav/services/order.service';
import { Material } from 'src/app/Shachlav/Models/material.models';
import { MaterialCategory } from '../../Models/materialCategory.models';
@Component({
  selector: 'app-add-materials',
  templateUrl: './add-materials.component.html',
  styleUrls: ['./add-materials.component.css']
})
export class AddMaterialsComponent implements OnInit {

  constructor(private fb:FormBuilder,public orderService:OrderService ) { }
addMaterialForm:FormGroup;
Material:Material;
CategoryL:Array<MaterialCategory>;
MaterialL:Array<Material>;
EzerMaterialL:Array<Material>;
category:MaterialCategory;
materialName=new FormControl();
categoryName=new FormControl();




ngOnInit(): void {
  
  this.addMaterialForm = this.fb.group({
  materialName:[''],
  categoryName:['']
   
  
  });
  this.MaterialL=this.orderService.materialL;
  this.orderService.materialLEvent.subscribe(suc=>this.MaterialL=suc);
  // this.orderService.getAllCategories().subscribe(suc=>{this.CategoryL=suc,console.log("cat")},err=>console.log("caterr"));
  // this.orderService.GetAllMaterial().subscribe(suc=>{this.MaterialL=suc;console.log("material")}, err=>console.log("materialerr"));

}

selected(cat)
{
   this.EzerMaterialL=this.MaterialL.filter(el=>el.MaterialCategoryId===cat.Id)
   this.addMaterialForm.patchValue({
    categoryName:cat.Name,
   })
 
}

selectedMaterial(m){
  this.addMaterialForm.patchValue({
    materialName:m.Name,
   })
}

editCategory(e){
  console.log(e.value);
}

addCategory(categoryname){
  console.log(categoryname.value);
  this.category=new MaterialCategory(null,categoryname);
  this.orderService.addCategory(this.category);
  // this.categoryName = '';
}
onSubmit(){
 
}


}

