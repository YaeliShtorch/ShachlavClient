import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {Order} from '../../models/order.models';
import {UsersService} from 'src/app/Shachlav/Services/users.service';
import {OrderService} from 'src/app/Shachlav/Services/order.service';
import {Router, ActivatedRoute} from '@angular/router'
import {CustomerService} from 'src/app/Shachlav/Services/customer.service';
import {Customer} from 'src/app/Shachlav/Models/customer.models';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {DataSource} from '@angular/cdk/table';
import {MatDialog} from '@angular/material/dialog';
import {DialogBoxComponent} from 'src/app/Shachlav/Components/order/dialog-box';
import {DriverService} from 'src/app/Shachlav/Services/driver.service';
import {PumpType} from 'src/app/Shachlav/Models/pumpType.model';
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({height: '0px', minHeight: '0', visibility: 'hidden'})),
            state('expanded', style({height: '*', visibility: 'visible'})),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
})


export class OrderComponent implements OnInit {

    orderFunc = "";
    orderNum: number;
    customer: string = "p";
    OrderList = new Array<Order>();
    dataSource = new MatTableDataSource<Order>();
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;
    displayedColumns = ['Id', 'OrderDate', 'SiteAdress', 'PumpNeeded', 'PumpType', 'StartTime', 'ConcreteCheck', 'Status', 'edit'];
    datepipe: any;
    PumpTypeArr = [];


    constructor(public customerService: CustomerService, public orderService: OrderService, public route: Router, public activatedRoute: ActivatedRoute, public userService: UsersService
        , public dialog: MatDialog, public driverService: DriverService) {

    }


    getAllOrders() {
        // this.show=true;
        this.orderService.GetCustOrders(this.userService.CustomerL.Id).subscribe(suc => {
            this.dataSource.data = [...suc];
            console.log(this.dataSource.data)
        }, err => {
            console.log("error")
        });
        console.log(this.dataSource.data);
    }

    getOrderbyId() {
        //לבדוק שמביא רק הזמנה של הלקוח הקיים
        // this.show=false;
    }

    //filter
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    getPumpTypeName(pumpId) {
        if (pumpId != 0) {
            return this.PumpTypeArr.find(x => x.Id == pumpId).PType;
        } else {
            return "no Pump";
        }

    }


    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

    }

    //edit or delete order
    openDialog(action, element) {
        const dialogRef = this.dialog.open(DialogBoxComponent, {
            width: '400px',
            data: {
                passData: element,
                passAction: action
            }
        });

        //what returns from dialog
        dialogRef.afterClosed().subscribe(result => {
            if (action === 'edit') {
                var tmp = element;
                if (result != false) {
                    //check what if anything changed
                    console.log(element)
                    this.orderService.UpdateOrder(element).subscribe(suc => {
                        alert("העידכון נשמר")
                    }, err => {
                        alert("בעיית התחברות, נסה מאוחר יותר")
                    });
                }
            } else {
                if (result == true) {
                    this.orderService.DeleteOrder(element.Id).subscribe(suc => {
                        alert("ההזמנה נמחקה");
                        this.dataSource.data = this.dataSource.data.filter((value, key) => {
                            return value.Id != element.Id;
                        });
                    }, err => {
                        alert("ההזמנה לא נמחקה, נסה שוב")
                    });

                }
            }
        });


    }

    ngOnInit() {

        //this.activatedRoute.paramMap("")
        // console.log(this.activatedRoute.snapshot.routeConfig.path.split('/')[1]);

        //saving all pumpnames in an array
        this.driverService.GetAllPumpTypes().subscribe(suc => {
            this.PumpTypeArr = suc
        });
        this.activatedRoute.params.subscribe(params => {
            this.orderFunc = this.activatedRoute.snapshot.routeConfig.path.split('/')[1];
            if (this.orderFunc.match('getAllOrders()'))
                this.getAllOrders();
            if (this.orderFunc.match('getOrderbyId()'))
                this.getOrderbyId();

        });

    }

}
