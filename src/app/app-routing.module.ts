import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';

const routes: Routes = [
  { path : '',redirectTo:'forms',pathMatch : 'full'},
  { path : 'forms', component : AngularFormsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }