
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-pump',
  templateUrl: './order-pump.component.html',
  styleUrls: ['./order-pump.component.css']
})
export class OrderPumpComponent implements OnInit {
  constructor(private fb:FormBuilder,orderService:OrderService ) { }
  newOrderForm:FormGroup;
  VehiclesTypes:Array<String>;
 MorePumps:Array<boolean>=[true];
  ngOnInit(): void {
    this.VehiclesTypes=["משאבה 62 מטר","משאבה 56 מטר","משאבה 52 מטר","משאבה 42 מטר","משאבה 36 מטר","משאבה 32 מטר","משאבה 28 מטר","משאבה 24 מטר","משאבת מייקו עם זרוע","משאבת מייקו"];
    this.newOrderForm = this.fb.group({
    
    
      PumpNeeded:[''],
      PumpType:['']
     
     
    
    });
  
  }
onSubmit()
{
  
}
AddPump(){
  this.MorePumps.push(true);

}
RemovePump(){
  this.MorePumps.pop();

}
}
