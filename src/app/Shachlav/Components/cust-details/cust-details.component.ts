import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Shachlav/Models/customer.models';
import { UsersService } from 'src/app/Shachlav/Services/users.service';

@Component({
  selector: 'app-cust-details',
  templateUrl: './cust-details.component.html',
  styleUrls: ['./cust-details.component.css']
})
export class CustDetailsComponent implements OnInit {

  constructor(public UserService:UsersService) { }
CurentCustomer;
  ngOnInit(): void {
  // this.CurentCustomer=this.UserService.getCurrentUser();
  }

}
