import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-doctorsms',
  templateUrl: './doctorsms.component.html',
  styleUrls: ['./doctorsms.component.css']
})
export class DoctorsmsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery(document).ready(function(){
      jQuery('#doctorsmsviewId').hide();
      jQuery('#btnview').click(function(){
        jQuery('#doctorsmsviewId').show();
      })
    });

  }

}
