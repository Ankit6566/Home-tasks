import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedComponent } from './deleted.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DeletedComponent],
  imports: [
    CommonModule,SharedModule
  ]
})
export class DeletedModule { }
