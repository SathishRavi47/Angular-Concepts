import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute} from '@angular/router';
import { Component, AfterViewInit, ViewChild, ElementRef, Input, Output } from '@angular/core';

declare let $:any;

@Injectable({
  providedIn: 'root'
})
export class EmitterService {

  public message = new BehaviorSubject('');
  public route = new BehaviorSubject('');

  responseMessageSource = this.message.asObservable();
  responseForRoute = this.route.asObservable();

  getRouteLink(data) {
    this.route.next(data);
    console.log('data',data);
  }
  getMessage(data: any) {
    this.message.next(data);
  }
  constructor() { }
}
