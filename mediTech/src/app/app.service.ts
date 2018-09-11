import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  // "../node_modules/bootstrap/dist/css/bootstrap.min.css", "src/assets/css/bootstrap.min.css",
  //"../node_modules/bootstrap/dist/css/bootstrap-theme.min.css",
 //"src/assets/datatables.net-bs/css/dataTables.bootstrap.min.css",
  private customer_url:string;
  private base_url:string;
  //private http:Http;

  constructor(private http: HttpClient) { 
  //  this.http = http;
    this.base_url = "http://localhost:8080/";
    this.customer_url = this.base_url+"mediTech/api/";
  }
  getAllCustomer():Observable<any>
	{
		return this.http.get<any>(this.customer_url+ "customer/");
	}
  // public getAllCustomer():Observable<any>{
  //   console.log("in getAllCustomer");
  //   return this.http.get(this.customer_url);
  // }
}
