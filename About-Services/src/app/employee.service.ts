import { Injectable } from '@angular/core'; 

@Injectable()
export class EmployeeService {

  constructor() { }
 //Step 1 - create service
  getEmployees(){
    return [
      {"id":1, "name":"A", "age":30},
      {"id":2, "name":"B", "age":25},
      {"id":3, "name":"C", "age":37},
      {"id":4, "name":"D", "age":20},
      {"id":5, "name":"E", "age":45}
    ];
  }
}
