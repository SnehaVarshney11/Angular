import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-test', //First way
 // selector: '.app-test', //as a class name Second Way
  selector: '[app-test]', //third way
  //templateUrl: './test.component.html',
  template: '<div>Inline Template</div>',
  //styleUrls: ['./test.component.css']
  styles: [`
      div{
        color: Red;
      }
  `]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
