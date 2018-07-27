import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery(document).ready(function(){
      jQuery('#txtDOBDatePicker').datepicker();
    });
  }

}
