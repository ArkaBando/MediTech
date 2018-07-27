import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class OrgDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery(document).ready(function(){
      jQuery('#btnclick').click(function(){
        alert('hi');
      })
     
    })
    
  }

}
