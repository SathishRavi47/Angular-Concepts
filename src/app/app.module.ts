import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FormPageComponent } from './form-page/form-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import { Routes } from '@angular/router';
import { EmitterService } from './emitter.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    FormPageComponent,
    ListPageComponent,
    AngularFormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
