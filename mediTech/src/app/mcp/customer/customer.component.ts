import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
declare var jQuery: any;
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class McpCustomerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    jQuery(document).ready(function(){
      var tblCustomerList;
      tblCustomerList= jQuery('#tblCustomers').DataTable({
        ajax: {
            url: 'http://localhost:4200/assets/api/customer.json'
        },
        processing: true,
        serverSide: true,
        stateSave: true,
        responsive: true,
        pageLength: 10,
        autoWidth: false,
        bSort: false,
        columnDefs: [ {
            "targets":1,
            "searchable": false
          } ],
        columns: [
            {
                data:'id',
                render: function (data, type, row, meta) {
                    return row.id;
                }
            },
            {
                data: 'name',
                render: function (data, type, row, meta) {
                    return row.name;
                }
            },
            {
                data: 'doctor',
                render: function (data, type, row, meta) {
                    return row.doctor;
                }
            },
            {
                data: 'contactperson',
                render: function (data, type, row, meta) {
                    return row.contactperson;
                }
            },
            {
                data: 'email',
                render: function (data, type, row, meta) {
                    return row.name;
                }
            },
            {
                data: 'phoneno',
                render: function (data, type, row, meta) {
                    return row.name;
                }
            },
            {
                data: 'state',
                render: function (data, type, row, meta) {
                    return row.state;
                }
            },
            {
                data: 'city',
                render: function (data, type, row, meta) {
                    return row.city
                }
            },
            {
                data: 'address',
                render: function (data, type, row, meta) {
                    return row.address;
                }
            },
            {
                data: 'pincode',
                render: function (data, type, row, meta) {
                    return row.pincode;
                }
            },
            {
                data: 'regdate',
                render: function (data, type, row, meta) {
                    return row.regdate;
                }
            },
            {
                data: 'status',
                render: function (data, type, row, meta) {
                    if(row.status==1)
                    {
                        return '<span class="label label-success">Active</span>';
                    }
                    else
                    {
                    return '<span class="label label-danger">DeActive</span>';
                    }
                }
            },
            {
                data: 'action',
                render: function (data, type, row, meta) {
                    return ['<div class="btn-group btn-group-xs">',
                       
                        '<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">',
                        '<span class="caret"></span>',
                        '<span class="sr-only">Toggle Dropdown</span>',
                        '</button>',
                        '<ul class="dropdown-menu" role="menu">',
                        '<li><a href="#" class="edit-customer" data-id="' + row.id + '"><i class="fa fa-edit text-blue"></i> Edit</a></li>',
                        '<li><a href="#" class="delete-customer" data-id="' + row.id + '"><i class="fa fa-trash text-red"></i> Delete</a></li>',
                        '<li><a href="#" class="change-status" data-id="' + row.id + '"><i class="fa fa-minus-circle text-red"></i> Deactivate</a></li>',
                        '</ul>',
                        '</div >'].join("");
                }
            }
        ],
        
    });
      jQuery('#txtDateRange').attr("readonly", "readonly").daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });
    
    jQuery('#txtDateRange').on('apply.daterangepicker', function (ev, picker) {
      jQuery(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
    });

    jQuery('#txtDateRange').on('cancel.daterangepicker', function (ev, picker) {
      jQuery(this).val('');
    });
     
    });


    
  }

}
