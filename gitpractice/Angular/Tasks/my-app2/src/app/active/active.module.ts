import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveComponent } from './active.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ActiveComponent],
  imports: [
    CommonModule,SharedModule
  ]
})
export class ActiveModule { }
