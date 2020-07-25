import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';
import {UsersService} from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
type:string;
sub :Subscription;
  constructor(private fb:FormBuilder,private route: ActivatedRoute) { }
  form: FormGroup 
  ngOnInit(): void {
    this.form = this.fb.group({
      username: new FormControl(''),
      password: new FormControl(''),
    });
    this.route.paramMap.subscribe(params => {
      this.type = params.get('typeP');
    });
    // this.type=this.route.params['typeP'];
   
   alert(this.type);
  }
onSubmit(){

}
}
 

