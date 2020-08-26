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
  let username ="";
  let password="";

if(localStorage.getItem('username')!==""&&localStorage.getItem('password')!=="" ){
  username=localStorage.getItem('username');
  password=localStorage.getItem('password');
  }

  this.form = this.fb.group({
    username: new FormControl(username,Validators.required),
    password: new FormControl(password,Validators.required),
  });
    this.route.paramMap.subscribe(params => {
      this.type = params.get('typeP');
      this.form.reset();
    });
    // this.type=this.route.params['typeP'];
   
 
  }
onSubmit(){
  console.log("im in");
  this.userService.setCurrentUser(this.form.value.username,this.form.value.password,this.type).subscribe(suc=>{
    let obj=suc;
    this.userService.getCurrentUser(obj, this.type);
    if(suc!==null){
  this.got=false;
  this.type.toLowerCase();
    localStorage.setItem('name',this.form.value.username);
    localStorage.setItem('password',this.form.value.password);
    localStorage.setItem('type',this.type);
  this.router.navigate([`home/${this.type.toLowerCase()}`]);
}
},err=>{alert("לא רשום במערכת"),  this.form.reset()})

}

}
 

