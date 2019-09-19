import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
const routes: Routes = [
  { path : '',redirectTo:'landing',pathMatch : 'full'},
  { path : 'landing', component : LandingComponent },
  { path : 'register', component : AngularFormsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }