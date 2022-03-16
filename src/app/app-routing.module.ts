import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  //{path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginPageComponent},
  {path:'', redirectTo:'user',pathMatch:'full'},
  {path:'user', component:UserListComponent},
  {path:'firstpage', component : FirstpageComponent},
  {path:'secondpage', component : SecondpageComponent},
  {path:'thirdpage', component : ThirdpageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
