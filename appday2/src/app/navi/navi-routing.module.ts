import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AddComponent } from '../add/add.component';

import { AddFeedbackComponent } from '../add-feedback/add-feedback.component';
import { AddItemfeedbackComponent } from '../add-itemfeedback/add-itemfeedback.component';
import { MenuComponent } from '../menu/menu.component';


const routes: Routes = [
{path:'',redirectTo:'/add',pathMatch:'full'},


{path:'add',component:AddComponent},

{path:'addfeedback/:cafeId/:cafeLocation',component:AddFeedbackComponent},
{path:'viewallitems',component:MenuComponent},
{path:'additemfeedback/:itemId/:itemName',component:AddItemfeedbackComponent},

{path:'**',redirectTo:'/add',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NaviRoutingModule { }
