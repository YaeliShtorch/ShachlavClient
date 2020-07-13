import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import {ValidationService} from 'src/app/Services/validation.service'

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  newOrderForm:FormGroup;
  ngOnInit(): void {
    this.newOrderForm = this.fb.group({
      OrderDate: [''],
      OrderTime:[''],
      Element:[''],
      SiteAdress:[''],
      ConcreteCheck:[''],
      PumpNeeded:[''],
      PumpType:['']
    
    });
  }
onSubmit(forn:FormGroup){}
}
