import { DatePipe } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
import { StatisticsService } from '../../Services/statistics.service';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-sub-home',
  templateUrl: './sub-home.component.html',
  styleUrls: ['./sub-home.component.css'],
  providers: [DatePipe],
})
export class SubHomeComponent implements OnInit {
 res:{ [index: string]: number}[];

  constructor(private statistics:StatisticsService, @Inject(LOCALE_ID) private locale: string) { }
  datePipeString:string;
  dateC=new Date(2020, 10,5).toLocaleString();
  
  ngOnInit(): void {
  }

  checkStatistic(){
    this.datePipeString = formatDate(this.dateC,'yyyy-MM-dd',this.locale);
    this.statistics.GetOrderPCT(this.dateC).subscribe(suc=>{console.log(suc)}, err=>{console.log("eror")});
  }

}
