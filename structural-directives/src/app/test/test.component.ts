import { Component, OnInit } from '@angular/core';

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
  `,
  styles: []
})
export class TestComponent implements OnInit {
  displayName = true;
  constructor() { }

  ngOnInit(): void {
  }

}
