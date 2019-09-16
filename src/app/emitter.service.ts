import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute} from '@angular/router';
import { Component, AfterViewInit, ViewChild, ElementRef, Input, Output } from '@angular/core';

declare let $:any;

@Injectable({
  providedIn: 'root'
})
export class EmitterService {
  private messageSource = new BehaviorSubject('');
  public message = new BehaviorSubject('');

  currentMessage = this.messageSource.asObservable();
  responseMessageSource = this.message.asObservable();

  changeMessage(message: any){
    this.message.next(message);
  }
  getMessage(data: any) {
    this.message.next(data);
  }
  constructor() { }
}
