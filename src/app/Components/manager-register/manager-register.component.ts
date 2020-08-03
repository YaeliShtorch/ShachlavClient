import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/Services/manager.service';
import { Manager } from 'src/app/Models/manager.models';
import { TouchSequence } from 'selenium-webdriver';
import { NgForm, FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';

import {ValidationService} from 'src/app/Services/validation.service'
import {isIsraeliIdValid} from 'israeli-id-validator';
@Component({
  selector: 'app-manager-register',
  templateUrl: './manager-register.component.html',
  styleUrls: ['./manager-register.component.css']
})
export class ManagerRegisterComponent implements OnInit {
registerForm:FormGroup;
  constructor(public managerService:ManagerService,private fb: FormBuilder) { }

  ngOnInit(): void {
    
    this.registerForm = this.fb.group({
      IdentityNumber: ['', [Validators.required,Validators.minLength(9),Validators.maxLength(9),ValidationService.IdentityOk()]],
      FirstName:['',Validators.required],
      LastName:['',Validators.required],
      Email:['',[Validators.required,Validators.email]],
      PhoneNumber:['',[Validators.required,Validators.minLength(7),Validators.maxLength(10)]],
      CellNumber:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      Address:['',Validators.required],
      BirthDate:['',[Validators.required,ValidationService.BirthDate()]],
      UserName:['',[Validators.required,ValidationService.NewManager(this.managerService)]],
      Password:['',Validators.required],
      CheckPassword:['',[Validators.required,ValidationService.matchValues('Password'),]],
    });
    
   
  }
ManagerAdd:Manager;
   


  
  // Id:number; 
  // IdentityNumber:string;
  // FirstName:string;    
  // LastName:string; 
  // Email:string;
  // PhoneNumber:string;
  // CellNumber:string;
  // Address:string; 
  // BirthDate:Date=new Date();
  // BirthDateAngular:string;
  // UserName:string;
  // Password:string;
  // CheckPassword:string;
  // ManagerAdd:Manager;
  // ToADD:boolean=true;

  onSubmit(){
  this.ManagerAdd=new Manager(this.registerForm.value.IdentityNumber,
    this.registerForm.value.FirstName,
    this.registerForm.value.LastName,
    this.registerForm.value.Email,
    this.registerForm.value.PhoneNumber,
    this.registerForm.value.CellNumber,
    this.registerForm.value.Address,
    this.registerForm.value.BirthDate,
    this.registerForm.value.UserName,
    this.registerForm.value.Password)
  this.managerService.AddManager(this.ManagerAdd).subscribe(
    suc=>{console.log(this.ManagerAdd.FirstName)},
    err=>{console.log("didnt reach")}
  )
}













//  onSubmit(registerForm:FormGroup){

  //   let unOk:boolean=false;
  // if(this.IdentityOk()==true){
    
  //   alert("good");
  //   if(this.Email.includes("@")){

  //     alert("@");
  //     // if(this.PhoneNumber.length==10){
    
  //     //   alert("ph");
  //       this.BirthDate = new Date(Date.parse(this.BirthDateAngular));
       
       
  //         if(this.BirthDate.getDay()<=31&&this.BirthDate.getDay()>=1&&this.BirthDate.getMonth()<=12&&this.BirthDate.getDay()>=1)
  //         {
  //           if(this.BirthDate.getFullYear()<=new Date().getFullYear()-18){
  //           alert(this.BirthDate);
  //           alert(this.UserName);
  //           this.managerService.GetManagerUN(this.UserName).subscribe(
  //             suc=>{ 
  //               if(suc==null){
               
  //                 if(this.Password==this.CheckPassword){
        //             this.ManagerAdd =new Manager(this.Id,this.IdentityNumber,this.FirstName,this.LastName,this.Email,this.PhoneNumber,this.CellNumber,this.Address,this.BirthDate,this.UserName,this.Password);
            //          this.AddManager(this.ManagerAdd);
  //                    let pan = (<HTMLInputElement>document.getElementById('Ok'));
                    
  //                    this.emptyVar();
  //                 }
  //                 else{   
  //                   alert("סיסמאות לא תואמות נסה שוב");
  //                   this.Password=""; 
  //                   this.CheckPassword="";
  //                 }
  //                               }
  //                               else{
  //                                 alert("קיים כזה שם משתמש במערכת נסה שם משתמש אחר");
  //                                 this.UserName=""; 
                                
  //                               }
            
  //         }
  //             ,err=>{alert("errUN")},);
      
  //              }
  //              else{
  //               alert("הנך צעיר/ה מדי");
  //               this.BirthDateAngular=""; 
              
  //             } 
  //           }
  //           else{
  //             alert("תאריך לא בטווח הנכון");
  //             this.BirthDateAngular=""; 
            
  //           }  
  //       // }
  //       // else{
  //       //   alert("פל");
  //       //   this.BirthDateAngular=""; 
        
  //       // }  
     // }
//       else{
//         alert("מייל לא תקין");
//         this.Email="";
//       }
//     }
//     else{
//       alert("תז לא תקנית הקש תז בעלת תשע ספרות הוסף אפסים בתחילה במקרה הצורך כולל ספרת ביקורת ");
//       this.IdentityNumber=""; 
      
//       }
 
//   }
//  // this.ManagerAdd=new Manager(1,"315285791","Yael","Shtorch","0548401908y@gmail.com","035786827","0548401908","Avtalyon",new Date(2000, 16, 7),"fff","ert"); 


 
//    emptyVar(){
//     this.IdentityNumber="";
//     this.FirstName="";    
//     this.LastName=""; 
//     this.Email="";
//     this.PhoneNumber="";
//     this.CellNumber="";
//     this.Address=""; 
//     this.BirthDate=new Date(); 
//     this.UserName="";
//     this.Password=""; 
//    this.CheckPassword="";

 
//    }
    // IdentityOk(){

  //   if(this.IdentityNumber.length==9){
  //   var IdNumber:number;
  //   IdNumber=0;
  //   // var checkId:number;
  //   // checkId=(this.IdentityNumber as any as number);
  //   // alert(checkId);
  //   // IdNumber+=checkId/100000000;
  //   // alert(IdNumber);
  //   IdNumber+=+this.IdentityNumber[0];

  //   IdNumber+=(((+this.IdentityNumber[1]*2)%10)+Math.floor((+this.IdentityNumber[1]*2)/10));
  
  //   IdNumber+=+this.IdentityNumber[2];
   
  //   IdNumber+=((+this.IdentityNumber[3]*2%10)+Math.floor(+this.IdentityNumber[3]*2/10));

  //   IdNumber+=+this.IdentityNumber[4];
  
  //   IdNumber+=((+this.IdentityNumber[5]*2%10)+Math.floor(+this.IdentityNumber[5]*2/10));
 
  //   IdNumber+=+this.IdentityNumber[6];
  
  //   IdNumber+=((+this.IdentityNumber[7]*2%10)+Math.floor(+this.IdentityNumber[7]*2/10));
    
  //   IdNumber=IdNumber%10;

  //   IdNumber=10-IdNumber;
  
  //   if(IdNumber==+this.IdentityNumber[8])
  //  return true;
  //   else 
  // return false;
  //   }
  //   else 
  //  return false; 
//   // }
//    IdentityOk(id:FormControl){

//     if(id.value.length==9){
//     var IdNumber:number;
//     IdNumber=0;
   
//     IdNumber+=+id.value[0];

//     IdNumber+=(((+id.value[1]*2)%10)+Math.floor((+id.value[1]*2)/10));
  
//     IdNumber+=+id.value[2];
   
//     IdNumber+=((+id.value[3]*2%10)+Math.floor(+id.value[3]*2/10));

//     IdNumber+=+id.value[4];
  
//     IdNumber+=((+id.value[5]*2%10)+Math.floor(+id.value[5]*2/10));
 
//     IdNumber+=+id.value[6];
  
//     IdNumber+=((+id.value[7]*2%10)+Math.floor(+id.value[7]*2/10));
    
//     IdNumber=IdNumber%10;

//     IdNumber=10-IdNumber;
  
//     if(IdNumber==+id.value[8])
//    return true;
//     else 
//   return false;
//     }
//     else 
//    return false; 
//   }
 }
