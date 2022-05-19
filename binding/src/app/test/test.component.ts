import { Component, OnInit } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

@Component({
  selector: 'app-test',
 
  template: `
    <h2>
      Welcom {{name}}
      </h2>
      <h2 class="text-success">ClassBinding 1</h2>
      <h2 [class] = "successClass">ClassBinding 2</h2>
      <h2 class="text-special" [class]="successClass">ClassBinding 3</h2>
      <h2 [class.text-danger]="hasError">ClassBinding 4</h2>
      <h2 [ngClass]="messageClass">ClassBinding 5</h2>

      <h2 [style.color] = "'orange'">StyleBinding 1</h2>
      <h2 [style.color] = "hasError ? 'red' : 'green'">StyleBinding 2</h2>
      <h2 [style.color] = "highlightColor">Style Binding 3</h2>
      <h2 [ngStyle] = "titleStyle">Style Binding 3</h2>

      <button (click) = "onClick($event)">Event Binding</button>
      <button (click) = "greeting = 'Welcome Angular'">Event Binding</button>
      {{greeting}}
  `,
  // concept of interpolation --> {{name}}
  // template: `
  //   <h2>
  //   Welcom {{name}} 
  //   </h2>
  //   <h2>{{2+2}}</h2>
  //   <h2>{{"Welcome " + name}}</h2>
  //   <h2>{{name.length}}</h2>
  //   <h2>{{name.toUpperCase()}}</h2>
  //   <h2>{{greateUser()}}</h2>
  //   <h2>{{siteUrl}}</h2>
  //   <input [id] = "myId" type="text" value="Sneha"> It is property binding
  //   <input bind-disabled = "isDisable" [id] = "myId" type="text" value="Sneha">
  // We can't do this here
  //   <h2>{{a = 2+2}}</h2>
  //   <h2>{{window.location.href}}</h2>
  // `,



  styles: [`
    .text-success {
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "Sneha"; 
  public siteUrl = window.location.href;
  public myId = "testId";
  public isDisable = true;
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public highlightColor = "violet";
  public titleStyle = {
    color: "blue",
    fontStyle: "italic"
  }
  public greeting = "";

  public messageClass = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  } 
  constructor() { }

  ngOnInit(): void {}

  onClick(event: any){
    console.log(event);
    this.greeting = "Welcome Angular";
  }
  greateUser(){
    return "Hello " + this.name;
  }
}
