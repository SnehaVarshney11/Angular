import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>{{ name }} </h2>
    <h2> {{ name | lowercase }} </h2>
    <h2> {{ name | uppercase }} </h2>
    <h2> {{ msg | titlecase}} </h2>
    <h2> {{ name | slice:3:5 }} </h2>
    <h2> {{ person | json }} </h2>

    /* Format : min num of int digit.min num of decimal digit-max num of decimal digit */
    <h2>{{5.678 | number:'1.2-3'}}</h2> 
    <h2>{{5.678 | number:'3.4-5'}}</h2>
    <h2>{{5.678 | number:'3.1-2'}}</h2>

    <h2>{{0.10 | percent}}</h2>

    <h2>{{0.25 | currency}}</h2>
    <h2>{{0.25 | currency: 'GBP'}}</h2>
    <h2>{{0.25 | currency: 'GBP': 'code'}}</h2>

    <h2>{{date}}</h2>
    <h2>{{date | date: 'short'}}</h2>
    <h2>{{date | date: 'shortDate'}}</h2>
    <h2>{{date | date: 'shortTime'}}</h2>
    <h2>{{date | date: 'long'}}</h2>
    <h2>{{date | date: 'longDate'}}</h2>
    <h2>{{date | date: 'longTime'}}</h2>
    <h2>{{date | date: 'medium'}}</h2>
    <h2>{{date | date: 'mediumDate'}}</h2>
    <h2>{{date | date: 'mediumTime'}}</h2>

  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Sneha Varshney";
  public msg = "Welcome here";
  public person = {
    "firstName" : "Sneha",
    "lastName" : "Varshney"
  }

  public date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
