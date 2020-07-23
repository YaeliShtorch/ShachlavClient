import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  form: FormGroup 
  ngOnInit(): void {
    this.form = this.fb.group({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

}
 

