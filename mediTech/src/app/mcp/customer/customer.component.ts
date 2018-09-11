import { Component, OnInit,OnDestroy  } from '@angular/core';
import { CustomerService } from './customer.service';
import { AppService } from '../../app.service';
import * as $ from 'jquery';
import 'datatables.net'

declare var jQuery: any;
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class McpCustomerComponent implements OnInit, OnDestroy {
 
  public customerList : any;
  public customerObservableList : any;
  public tableWidget: any;

  constructor(private appService : AppService ) { 
      
    this.appService = appService; 
    
}

private reInitDatatable(): void {
    if (this.tableWidget) {
      this.tableWidget.destroy()
      this.tableWidget=null
    }
    setTimeout(() => this.initDatatable(),0)
  }

  public deleteRow(): void {
    this.customerList.pop();
    this.reInitDatatable()
  }

  ngOnInit() {

    this.customerObservableList = this.appService.getAllCustomer().subscribe(data => {
        console.log(data);
        this.customerList = data;
        console.log("customer observable list =>");
        console.log(this.customerList);
       // data = data.json();
    },
    error => {
        console.log(error);
    });

    
    // jQuery(document).ready(function(){
    //   var tblCustomerList;
    //   tblCustomerList= jQuery('#tblCustomers').DataTable({
    //     ajax: {
    //         url: 'http://localhost:4200/assets/api/customer.json'
    //     },
    //     processing: true,
    //     serverSide: true,
    //     stateSave: true,
    //     responsive: true,
    //     pageLength: 10,
    //     autoWidth: false,
    //     bSort: false,
    //     columnDefs: [ {
    //         "targets":1,
    //         "searchable": false
    //       } ],
    //     columns: [
    //         {
    //             data:'id',
    //             render: function (data, type, row, meta) {
    //                 return row.id;
    //             }
    //         },
    //         {
    //             data: 'name',
    //             render: function (data, type, row, meta) {
    //                 return row.name;
    //             }
    //         },
    //         {
    //             data: 'doctor',
    //             render: function (data, type, row, meta) {
    //                 return row.doctor;
    //             }
    //         },
    //         {
    //             data: 'contactperson',
    //             render: function (data, type, row, meta) {
    //                 return row.contactperson;
    //             }
    //         },
    //         {
    //             data: 'email',
    //             render: function (data, type, row, meta) {
    //                 return row.name;
    //             }
    //         },
    //         {
    //             data: 'phoneno',
    //             render: function (data, type, row, meta) {
    //                 return row.name;
    //             }
    //         },
    //         {
    //             data: 'state',
    //             render: function (data, type, row, meta) {
    //                 return row.state;
    //             }
    //         },
    //         {
    //             data: 'city',
    //             render: function (data, type, row, meta) {
    //                 return row.city
    //             }
    //         },
    //         {
    //             data: 'address',
    //             render: function (data, type, row, meta) {
    //                 return row.address;
    //             }
    //         },
    //         {
    //             data: 'pincode',
    //             render: function (data, type, row, meta) {
    //                 return row.pincode;
    //             }
    //         },
    //         {
    //             data: 'regdate',
    //             render: function (data, type, row, meta) {
    //                 return row.regdate;
    //             }
    //         },
    //         {
    //             data: 'status',
    //             render: function (data, type, row, meta) {
    //                 if(row.status==1)
    //                 {
    //                     return '<span class="label label-success">Active</span>';
    //                 }
    //                 else
    //                 {
    //                 return '<span class="label label-danger">DeActive</span>';
    //                 }
    //             }
    //         },
    //         {
    //             data: 'action',
    //             render: function (data, type, row, meta) {
    //                 return ['<div class="btn-group btn-group-xs">',
                       
    //                     '<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">',
    //                     '<span class="caret"></span>',
    //                     '<span class="sr-only">Toggle Dropdown</span>',
    //                     '</button>',
    //                     '<ul class="dropdown-menu" role="menu">',
    //                     '<li><a href="#" class="edit-customer" data-id="' + row.id + '"><i class="fa fa-edit text-blue"></i> Edit</a></li>',
    //                     '<li><a href="#" class="delete-customer" data-id="' + row.id + '"><i class="fa fa-trash text-red"></i> Delete</a></li>',
    //                     '<li><a href="#" class="change-status" data-id="' + row.id + '"><i class="fa fa-minus-circle text-red"></i> Deactivate</a></li>',
    //                     '</ul>',
    //                     '</div >'].join("");
    //             }
    //         }
    //     ],
        
    // });
    //   jQuery('#txtDateRange').attr("readonly", "readonly").daterangepicker({
    //     autoUpdateInput: false,
    //     locale: {
    //         cancelLabel: 'Clear'
    //     }
    // });
    
    // jQuery('#txtDateRange').on('apply.daterangepicker', function (ev, picker) {
    //   jQuery(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
    // });

    // jQuery('#txtDateRange').on('cancel.daterangepicker', function (ev, picker) {
    //   jQuery(this).val('');
    // });
     
    // });
   
    this.initDatatable()
  }

  private initDatatable(): void {
    let customerTblId: any = $('#tblCustomers');
    let table: any = this.tableWidget;
    setTimeout(function () { 
        $(function () {
            table = customerTblId.DataTable({
                select: true,
                    responsive: true,
                    pageLength: 10,
                    autoWidth: true,
                    bSort: false
              });
        });
        this.tableWidget = table;
      }, 3000);  
  }

  ngOnDestroy() {
    this.customerObservableList.dispose();
  }

}
