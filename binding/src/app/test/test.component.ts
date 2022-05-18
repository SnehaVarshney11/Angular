import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // concept of interpolation --> {{name}}
  template: `
    <h2>
    Welcom {{name}} 
    </h2>
    <h2>{{2+2}}</h2>
    <h2>{{"Welcome " + name}}</h2>
    <h2>{{name.length}}</h2>
    <h2>{{name.toUpperCase()}}</h2>
    <h2>{{greateUser()}}</h2>
    <h2>{{siteUrl}}</h2>
  `,
  // We can't do this here
  //   <h2>{{a = 2+2}}</h2>
  //   <h2>{{window.location.href}}</h2>
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Sneha"; 
  public siteUrl = window.location.href;
  constructor() { }

  ngOnInit(): void {
  }
  greateUser(){
    return "Hello " + this.name;
  }
}
