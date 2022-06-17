import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { IEmployee } from './app';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/throw';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {

  private _url: string = "/assets/data/employees.json";

  constructor(private http : HttpClient) { }
 //Step 1 - create service
  getEmployees() :  Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }
  
    // return [
    //   {"id":1, "name":"A", "age":30},
    //   {"id":2, "name":"B", "age":25},
    //   {"id":3, "name":"C", "age":37},
    //   {"id":4, "name":"D", "age":20},
    //   {"id":5, "name":"E", "age":45}
    // ];
  
}
