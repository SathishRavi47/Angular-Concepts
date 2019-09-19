import { Component } from '@angular/core';
import { EmitterService } from './emitter.service';
import { Router } from '@angular/router' 
declare const $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'io-decorators';
  name = 'Sathish';
  area = "Maraimalainager";
  city = "Chennai";
  public message : any;
  public registeredNames: any;
  constructor(public emitter:EmitterService, public router:Router) {}

  receiveName(value) {
    this.registeredNames = [];
    this.registeredNames.push(value);
    console.log('this.registered name',this.registeredNames);
  }
  ngOnInit() {
    this.emitter.responseMessageSource.subscribe(item=>{
      if(item){
        this.message=item;
        $(document).ready(function(){
          $('#myModal').modal('show');
        });
        
      }
    });
  }
  focusElement(message) {
    if(message == 'You have registered Successfully.') {
      this.emitter.getRouteLink('login');
      this.router.navigate(['./register']);
    }
  }
}
