import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { ManagerService } from './manager.service';
import { CustomerService } from './customer.service';
import { ProviderService } from './provider.service';
import { DriverService } from './driver.service';


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
       if(BirthDate.getFullYear()>=new Date().getFullYear()-18){
    
      return {userOldEnough:false};
    }
      }
  
       
       
  else
    return null;
      }
    }
   
     static NewManager( ManagerService:ManagerService):ValidationErrors {
      return (c:AbstractControl):{[key:string]:boolean}|null=>{
      
        ManagerService.GetManagerUN(c.value).subscribe(
          suc=>{
          if(suc!=null){
            return {UserNameMValid:true};
          }
          else{
            return {UserNameMValid:false};
          }
        }
        ,err=>{return null},);
        
      return null;  
      };    
  }
  static NewCustomer( CustomerService:CustomerService):ValidationErrors {
    return (c:AbstractControl):{[key:string]:boolean}|null=>{
    
      CustomerService.GetCustomerUN(c.value).subscribe(
        suc=>{
        if(suc!=null){
          return {UserNameCValid:true};
        }
        else{
          return {UserNameCValid:false};
        }
      }
      ,err=>{return null},);
      
    return null;  
    };    
}
static NewProvider( ProviderService:ProviderService):ValidationErrors {
  return (c:AbstractControl):{[key:string]:boolean}|null=>{
  
    ProviderService.GetProviderUN(c.value).subscribe(
      suc=>{
      if(suc!=null){
        return {UserNamePValid:true};
      }
      else{
        return {UserNamePValid:false};
      }
    }
    ,err=>{return null},);
    
  return null;  
  };    
}
static NewDriver( DriverService:DriverService):ValidationErrors {
  return (c:AbstractControl):{[key:string]:boolean}|null=>{
  
    DriverService.GetDriverUN(c.value).subscribe(
      suc=>{
      if(suc!=null){
        return {UserNameDValid:true};
      }
      else{
        return {UserNameDValid:false};
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
static DisableDates():ValidationErrors {
  return (c:AbstractControl):{[key:string]:boolean}|null=>{ 

  const date = new Date();
  
  const year = date.getUTCFullYear();
  
  const month = date.getUTCMonth() +1;
  
  const day = date.getUTCDate() +1;
  
  const tomorrowDate =new Date( year, month, day);
  if((c.value as Date)<tomorrowDate)
  return {DisableDates:true};
  else
  return {DisableDates:false};
  
  }
  }
  static OneOfTworequired(One:string):ValidationErrors{
  return (c:AbstractControl):{[key:string]:boolean}|null=>{ 
    if(c.value!=undefined||One!=undefined)
      return {OneOfTworequired:true};
      else
      return {OneOfTworequired:false};
    }
  }
  }


