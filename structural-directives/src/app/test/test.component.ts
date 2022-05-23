import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2 *ngIf = "displayName; else elseBlock">
      About Structural Directives
    </h2>
    <ng-template #elseBlock>
    <h2>
      Name is hidden
    </h2>
    <div *ngIf = "displayName; then thenBlock; else elseBlock"></div>
    <ng-template #thenBlock>
      <h2> Structural Directives IfBlock </h2>
    </ng-template>
    <ng-template #elseBlock>
      <h2>Hidden elseBlock</h2>
    </ng-template>


    <div [ngSwitch] = "color">
      <div *ngSwitchCase = "'red'">You picked red color.</div>
      <div *ngSwitchCase = "'blue'">You picked blue color.</div>
      <div *ngSwitchCase = "'green'">You picked green color.</div>
      <div *ngSwitchDefault>Pick Again</div>
    </div>

    <div *ngFor = "let color of colors; index as i; first as f; last as l; odd as o; even as e">
        <h2>{{e}} {{o}} {{l}} {{f}} {{i}} {{color}}</h2>
      </div>

      <h2>{{"About Component Interaction " + name}}</h2>
      <Button (click) = "fireEvent()">Send Event</Button>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public color = "pink";
  displayName = false;
  public colors = ["red", "blue", "green", "yellow"];

  @Input('parentData') public name: any;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  fireEvent(){
    this.childEvent.emit('Hey Sneha');
  }

}
