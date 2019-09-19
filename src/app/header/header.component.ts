import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmitterService } from '../emitter.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router:Router,public emitter:EmitterService) { }

  ngOnInit() {
  }
  clickToRoute(url) {
    if(url=='register') {
      this.emitter.getRouteLink('register');
    this.router.navigate(['./register']);
    }
    else if(url == 'landing') {
      this.router.navigate(['./landing']);
    }
    else if(url == 'login') {
      this.emitter.getRouteLink('login');
      this.router.navigate(['./register']);
    }
  }
}
