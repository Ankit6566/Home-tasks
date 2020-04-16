import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DatabindingdemoComponent } from './databindingdemo/databindingdemo.component';
import { OutputdemoComponent } from './outputdemo/outputdemo.component';
import { AttributeDirectiveDirective } from './attribute-directive.directive';

@NgModule({
  declarations: [
    AppComponent,UserComponent, DatabindingdemoComponent, OutputdemoComponent, AttributeDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
