import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCafedetailsComponent } from '../user-cafedetails/user-cafedetails.component';
import { SearchComponent } from '../search/search.component';
import { AddComponent } from '../add/add.component';
import { ListComponent } from '../list/list.component';
import { AddFeedbackComponent } from '../add-feedback/add-feedback.component';

const routes: Routes = [
{path:'',redirectTo:'/add',pathMatch:'full'},
{path:'user-cafedetails',component:UserCafedetailsComponent},
{path:'search',component:SearchComponent},
{path:'add',component:AddComponent},
{path:'list',component:ListComponent},
{path:'addfeedback/:cafeId',component:AddFeedbackComponent},
{path:'**',redirectTo:'/add',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NaviRoutingModule { }
