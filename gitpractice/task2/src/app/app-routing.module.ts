import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { ActiveComponent } from './active/active.component';
import { DeletedComponent } from './deleted/deleted.component';

const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'active' , component: ActiveComponent },
  {path: 'deleted', component:DeletedComponent},
  {path: 'manage',loadChildren: ()=> import('./manage/manage.module').then(destination=>destination.ManageModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
