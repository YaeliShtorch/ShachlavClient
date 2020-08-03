import { Optional } from '@angular/core';

export class Customer{
    constructor(
        @Optional() public Id:number,
     public IdentityNumber:string,
     public FirstName:string,
     public LastName:string,
     public BusinessCode:string,
     public CompanyName:string,
     public Email:string,
     public PhoneNumber:string,
     public CellNumber:string,
     public Address:string,
     public UserName:string,
     public Password:string,
     public BirthDate:Date

     ){}
}