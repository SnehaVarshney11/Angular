import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2>Employee List </h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.name}}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public employees = [
    // {"id":1, "name":"A", "age":30},
    // {"id":2, "name":"B", "age":25},
    // {"id":3, "name":"C", "age":37},
    // {"id":4, "name":"D", "age":20},
    // {"id":5, "name":"E", "age":45}
  ];

  constructor(private _empService : EmployeeService) { }

  ngOnInit():void{
    //this.employees = this._empService.getEmployees();
    this._empService.getEmployees().subscribe(data => this.employees = data);
  }

}
