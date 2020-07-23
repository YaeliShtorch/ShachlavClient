import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { ManagerService } from './manager.service';


@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }
  static IdentityOk():ValidationErrors{
  
    return (c:AbstractControl):{[key:string]:boolean}|null=>{
  
      if(c.value.length==9){
        var IdNumber:number;
        IdNumber=0;
       
        IdNumber+=+c.value[0];
    
        IdNumber+=(((+c.value[1]*2)%10)+Math.floor((+c.value[1]*2)/10));
      
        IdNumber+=+c.value[2];
       
        IdNumber+=((+c.value[3]*2%10)+Math.floor(+c.value[3]*2/10));
    
        IdNumber+=+c.value[4];
      
        IdNumber+=((+c.value[5]*2%10)+Math.floor(+c.value[5]*2/10));
     
        IdNumber+=+c.value[6];
      
        IdNumber+=((+c.value[7]*2%10)+Math.floor(+c.value[7]*2/10));
        
        IdNumber=IdNumber%10;
    
        IdNumber=10-IdNumber;
      
        if(IdNumber==+c.value[8])
       return {israeliIdOk:true};
      
        else 
      return null;
        }
        else 
       return null; 
      }
    }
    
  
    static BirthDate():ValidationErrors{
  
   
 
      return (c:AbstractControl):{[key:string]:boolean}|null=>{
        let BirthDate=new Date(Date.parse(c.value));
   
    
      if(BirthDate.getDay()<=31&&BirthDate.getDay()>=1&&BirthDate.getMonth()<=12&&BirthDate.getDay()>=1)
      {
       if(BirthDate.getFullYear()<=new Date().getFullYear()-18){
    
      return {userOldEnough:false};
    }
      }
  
       
       
  else
    return null;
      }
    }
   
     static NewUserName( ManagerService:ManagerService):ValidationErrors {
      return (c:AbstractControl):{[key:string]:boolean}|null=>{
      
        ManagerService.GetManagerUN(c.value).subscribe(
          suc=>{
          if(suc!=null){
            return {UserNameValid:true};
          }
          else{
            return {UserNameValid:false};
          }
        }
        ,err=>{return null},);
        
      return null;  
      };    
  }
  static matchValues(
    Password: string 
  ): (AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      return !!control.parent &&
        !!control.parent.value &&
        control.value === control.parent.controls[Password].value
        ? null
        : { isMatching: false };
    };
}
  }
