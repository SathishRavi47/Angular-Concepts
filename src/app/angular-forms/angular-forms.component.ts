import { Component, OnInit } from '@angular/core';
import { EmitterService } from '../emitter.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
declare const $: any;
@Component({
  selector: 'app-angular-forms',
  templateUrl: './angular-forms.component.html',
  styleUrls: ['./angular-forms.component.scss']
})
export class AngularFormsComponent implements OnInit {
  public formOption: boolean = false;
  public mNumber: any;
  public login: boolean;
  public cusName: any;
  public regPassword: any;
  public userName: any;
  constructor(public emitter: EmitterService, public location: Location, public router: Router) { }

  ngOnInit() {
    this.emitter.responseForRoute.subscribe(item => {
      if (item == 'register') {
        this.login = false;
        this.location.replaceState('/register');
      }
      else if (item == 'login') {
        this.login = true;
        this.location.replaceState('/login');
      }
    });
  }
  changeFormType(type) {
    if (type == 'fromTemplate') {
      this.formOption = true;
    }
    else if (type == 'fromReactive') {
      this.formOption = false;
    }
    else {
      this.router.navigate(['landing']);
    }
  }
  validateForm(form) {
    if (form.valid) {
      if (form.form.controls.passWord != null && form.form.controls.passWord != undefined) {
      }
      else {
        this.userName = this.cusName;
        this.emitter.getMessage('You have registered Successfully.');
        let userDetail = {};
        var registeredUsers = [];
        var storeUserDetails = [];
        userDetail['registerUser'] = this.cusName;
        userDetail['password'] = this.regPassword;
        registeredUsers.push(userDetail);
        for(let i=0; i<registeredUsers.length;i++) {
          storeUserDetails.concat(registeredUsers);
        }
        console.log('store details',storeUserDetails);
      }
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
  routeToRegister(formType) {
    if(formType == 'fromRegister') {
      this.login = true;
      this.location.replaceState('login');
    }
    else if (formType == 'fromLogin'){
      this.login = false;
      this.location.replaceState('register');
    }
  }

}
