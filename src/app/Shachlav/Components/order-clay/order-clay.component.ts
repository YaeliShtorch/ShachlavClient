import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-clay',
  templateUrl: './order-clay.component.html',
  styleUrls: ['./order-clay.component.css']
})
export class OrderClayComponent implements OnInit {
  newClayForm:FormGroup;
  ClayTypes:Array<string>;
  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
    this.ClayTypes=["משאבה 62 מטר","משאבה 56 מטר","משאבה 52 מטר","משאבה 42 מטר","משאבה 36 מטר","משאבה 32 מטר","משאבה 28 מטר","משאבה 24 מטר","משאבת מייקו עם זרוע","משאבת מייקו"];
    this.newClayForm = this.fb.group({
      ClayType: ['']
    });
  }
  onSubmit(){}

}
