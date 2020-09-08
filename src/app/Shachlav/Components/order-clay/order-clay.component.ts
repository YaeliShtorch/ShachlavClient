import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Material } from 'src/app/Shachlav/Models/material.models';
import { OrderService } from 'src/app/Shachlav/services/order.service';

@Component({
  selector: 'app-order-clay',
  templateUrl: './order-clay.component.html',
  styleUrls: ['./order-clay.component.css']
})
export class OrderClayComponent implements OnInit {
//   newClayForm:FormGroup;
//   ClayTypes:Array<Material>;
//  ClayChosen:Array<Material>;
//   constructor(private fb:FormBuilder,private orderService:OrderService ) { }
  ngOnInit(): void {
    // this.ClayTypes=new Array<Material>();
    // this.orderService.GetClay().subscribe(
    //   suc=>{
    //     this.ClayTypes=(suc as Array<Material>);  
    //   },
    //   err=>{console.log("errGetClayTypes")})
    // ;
 
    // this.newClayForm = this.fb.group({
    //   ClayType: ['']
    // });
  }
//   @Output() addOrderDetails = new EventEmitter<{data:Array<Material>,Type:string}>();
// change(){

//   this.ClayChosen[0]=this.ClayTypes[this.newClayForm.value.ClayType];
//   this.addOrderDetails.emit({data:this.ClayChosen,Type:"Clay"});
// }

}
