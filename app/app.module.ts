import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserCafedetailsComponent } from './user-cafedetails/user-cafedetails.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { NaviRoutingModule } from './navi/navi-routing.module';
import { FormsModule } from '@angular/forms';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component'

@NgModule({
  declarations: [
    AppComponent,
    UserCafedetailsComponent,
    AddComponent,
    ListComponent,
    SearchComponent,
    AddFeedbackComponent
  ],
  imports: [
    BrowserModule,NaviRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
