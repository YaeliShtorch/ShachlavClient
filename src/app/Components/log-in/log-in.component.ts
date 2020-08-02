import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';
import {UsersService} from 'src/app/services/users.service';
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
type:string;
got:boolean=true;
sub :Subscription;
  constructor(private fb:FormBuilder,private route: ActivatedRoute,public userService:UsersService, public router:Router) { }
  form: FormGroup 
  ngOnInit(): void {
    this.form = this.fb.group({
      username: new FormControl(localStorage.getItem('name'),Validators.required),
      password: new FormControl(localStorage.getItem('password'),Validators.required),
    });
    this.route.paramMap.subscribe(params => {
      this.type = params.get('typeP');
      this.form.reset();
    });
    // this.type=this.route.params['typeP'];
   
   alert(this.type);
  }
onSubmit(){
if(this.userService.setCurrentUser(this.form.value.username,this.form.value.password,this.type)){
this.got=false;
this.type.toLowerCase();
console.log(this.type);
this.router.navigate([`home/${this.type.toLowerCase()}`]);
console.log("found");

}
else{
  this.form.reset();
  console.log("didnt find");
  this.router.navigate([`/home/login/${this.type}`]);
  // this.form.value.username="";
  // this.form.value.password="";
 
}

}
}
 

