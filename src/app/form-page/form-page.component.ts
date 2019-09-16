import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {
  cusName: string;
  address: any;
  mNumber: any;
  regValues: any;

  constructor() { }
  @Output() sendName = new EventEmitter<string>();

  ngOnInit() {
  }
  sendingName() {
    this.regValues = [];
    this.regValues.push(this.cusName);
    this.regValues.push(this.mNumber);
    this.regValues.push(this.address);
    this.sendName.emit(this.regValues);
    this.regValues = "";
  }
}
