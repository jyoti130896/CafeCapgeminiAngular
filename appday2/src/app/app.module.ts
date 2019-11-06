import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';

import { AddComponent } from './add/add.component';


import { NaviRoutingModule } from './navi/navi-routing.module';
import { FormsModule } from '@angular/forms';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { AddItemfeedbackComponent } from './add-itemfeedback/add-itemfeedback.component';
import { MenuComponent } from './menu/menu.component';

import { HttpErrorInterceptor } from './http-interceptor';

@NgModule({
  declarations: [
    AppComponent,
  
    AddComponent,
   
   
    AddFeedbackComponent,
    AddItemfeedbackComponent,
    MenuComponent,
    
  ],
  imports: [
    BrowserModule,NaviRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
