import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';

import {ValidationService} from 'src/app/Services/validation.service'
@Component({
  selector: 'app-driver-task',
  templateUrl: './driver-task.component.html',
  styleUrls: ['./driver-task.component.css']
})
export class DriverTaskComponent implements OnInit {


  constructor(private fb:FormBuilder) { }
  driverTaskForm:FormGroup;
  ngOnInit(): void {
    this.driverTaskForm = this.fb.group({
      StartTime : ['', Validators.required],
      EndTime:['',Validators.required],
      WorkDate:['',Validators.required],
      Amount :['',Validators.required],
    
    });
  }
   onSubmit(form:FormGroup){}
}
