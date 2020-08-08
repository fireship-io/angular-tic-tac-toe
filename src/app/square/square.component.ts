import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button mat-flat-button color="primary" *ngIf="!value && (flag ==  null)">{{ value }}</button>
    <button mat-flat-button [disabled]="flag" color="primary" *ngIf="flag && (value == null)">{{ value }}</button>
    <button mat-flat-button color = "warn" *ngIf="value == 'X'">{{ value }}</button>
    <button mat-raised-button color = "primary" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 2.5em !important;}',]
})
export class SquareComponent  {

  @Input() value: 'X' | 'O';
  @Input() flag: string;

}
