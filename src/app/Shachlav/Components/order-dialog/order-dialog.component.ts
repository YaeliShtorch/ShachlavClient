import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DriverService } from '../../Services/driver.service';

@Component({
  selector: 'vex-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.scss']
})
export class OrderDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public passObj: any, public driverService: DriverService) { }

  ngOnInit(): void {
  }

}
