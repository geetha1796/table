import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeetableComponent } from './employeetable/employeetable.component';

const routes: Routes = [{path:'employeetable',component:EmployeetableComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
