import { Component, OnInit } from '@angular/core';
import { EmitterService } from '../emitter.service';
declare const $:any;
@Component({
  selector: 'app-angular-forms',
  templateUrl: './angular-forms.component.html',
  styleUrls: ['./angular-forms.component.scss']
})
export class AngularFormsComponent implements OnInit {
  public formOption : boolean = false;
  public mNumber : any;
  constructor(public emitter : EmitterService) { }

  ngOnInit() {
  }
  changeFormType(type){
    if(type == 'fromTemplate') {
      this.formOption = true;
    }
    else {
      this.formOption = false;
    }
    
  }
  validateForm(form) {
    console.log('form fields',form);
    if(form.valid) {
      this.emitter.getMessage('hi');
    }
    else {
    Object.keys(form.controls).forEach(field => {
      form.form.get(field).markAsTouched({ onlySelf: true }); 
    });
    setTimeout(() => {
      $(".form-field .ng-touched.ng-invalid:eq(0)").focus();
    });
  }
}
}
