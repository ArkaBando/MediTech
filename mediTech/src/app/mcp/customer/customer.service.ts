import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
//import "rxjs/add/operator/map";
@Injectable()
export class CustomerService {

	
	_APIBaseUrl: string = "http://internalmail.com/mycraft/api/";

	constructor(private http: HttpClient) {
		
	}
	getData() {
       
    }
	
	

}