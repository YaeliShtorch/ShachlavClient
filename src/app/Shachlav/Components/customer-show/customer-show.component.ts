import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Customer } from 'src/app/Shachlav/Models/customer.models'
import { CustomerService } from 'src/app/Shachlav/Services/customer.service';
import { CustomerUpdateComponent } from '../customer-update/customer-update.component';
import { MatSort } from "@angular/material/sort";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer-show',
  templateUrl: './customer-show.component.html',
  styleUrls: ['./customer-show.component.css'],
  animations: [
    trigger('detailExpand', [
      state('void', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('*', style({ height: '*', visibility: 'visible' })),
      transition('void <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CustomerShowComponent implements OnInit {
  dataSource = new MatTableDataSource<Customer>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['Id', 'IdentityNumber', 'FirstName', 'LastName', 'CompanyName', 'BusinessCode', 'Email', 'PhoneNumber', 'CellNumber', 'Address', 'BirthDate', 'UserName', 'Password', 'IsActive', 'EditDelete'];
  show: boolean = false;
  CustomerUpdate: Customer;

  @ViewChild('deleteCust') deleteCust: TemplateRef<any>;


  constructor(public customerService: CustomerService, private dialog: MatDialog, public snackbar: MatSnackBar) { }

  isExpansionDetailRow = (i: number, row: any) => row.hasOwnProperty('detailRow');

  getAllCustomers() {
    // this.show=true;
    this.customerService.GetAllCustomers().subscribe(suc => { this.dataSource.data = [...suc]; console.log(this.dataSource.data); this.show = true; }, err => { console.log("error") });
    // console.log(this.dataSource.data);
  }

  //filter
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  openDialog(action, row) {
    console.log(row);
    //check if to open dialog
    if (row !== undefined) {
      if (action === "delete") {
        let dialogRef = this.dialog.open(this.deleteCust);
        dialogRef.afterClosed().subscribe(result => {
          // Note: If the user clicks outside the dialog or presses the escape key, there'll be no result
          if (result !== undefined) {
            if (result === true) {
              console.log(row.Id);
              this.customerService.DeleteCustomer(row.Id).subscribe(suc => {
                this.snackbar.open('לקוח הוסר מהמערכת', null, { duration: 4000 });
                this.dataSource.data = this.dataSource.data.filter(function (el) { return el.Id != row.Id; });
              },
                err => this.snackbar.open('שגיאה, נסה מאוחר יותר', null, { duration: 4000 }));
            }

          }
        })
      } else if (action === 'edit') {
        let dialogRef = this.dialog.open(CustomerUpdateComponent, {
          // height: '700px',
          // width:'400px',
          data: {
            passData: row
          }
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log(result)
          //Note: If the user clicks outside the dialog or presses the escape key, there'll be no result
          if (result !== undefined) {
            this.CustomerUpdate = new Customer(row.Id,
              result.value.IdentityNumber,
              result.value.FirstName,
              result.value.LastName,
              result.value.CompanyName,
              result.value.BusinessCode,
              result.value.Email,
              result.value.PhoneNumber,
              result.value.CellNumber,
              result.value.Address,
              result.value.UserName,
              result.value.Password,
              result.value.BirthDate,
              result.value.IsActive);


            // console.log(this.ManagerUpdate);
            this.customerService.UpdateCustomer(this.CustomerUpdate).subscribe(suc => 
              { this.snackbar.open('פרטי לקוח עודכנו במערכת', null, { duration: 4000 }); this.getAllCustomers() },
              err => this.snackbar.open('שגיאה, נסה מאוחר יותר', null, { duration: 4000 }));


          }
        })

      }
    }

  }

  ngOnInit() {
    this.show = false;
    this.getAllCustomers();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

}
