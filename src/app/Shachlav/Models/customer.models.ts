import { Optional } from '@angular/core';

export class Customer{
    // private Id:number;

    // public get Id(): number {
    //     return this._Id;
    // }
    // public set Id(value: number) {
    //     this._Id = value;
    // }
    constructor(
     public Id:number,
     public IdentityNumber:string,
     public FirstName:string,
     public LastName:string,
     public CompanyName:string,
     public BusinessCode:string,
     public Email:string,
     public PhoneNumber:string,
     public CellNumber:string,
     public Address:string,
     public UserName:string,
     public Password:string,
     public BirthDate:Date,
     public IsActive:boolean,

     ){

        // this.Id=_Id;
     }
}