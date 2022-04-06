import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { E404Component } from './e404/e404.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './sales/user/user-list/user-list.component';
import { UserCreateComponent } from './sales/user/user-create/user-create.component';
import { UserDetailComponent } from './sales/user/user-detail/user-detail.component';
import { UserEditComponent } from './sales/user/user-edit/user-edit.component';
import { UserLoginComponent } from './sales/user/user-login/user-login.component';
import { VendorListComponent } from './sales/vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './sales/vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './sales/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './sales/vendor/vendor-edit/vendor-edit.component';

const routes: Routes = [
{path: "", redirectTo:"/home", pathMatch:"full"},
{path: "home", component: HomeComponent},

{path: "user/list", component: UserListComponent},
{path: "user/create", component: UserCreateComponent},
{path: "user/detail/:id", component: UserDetailComponent},
{path: "user/edit/:id", component: UserEditComponent},
{path: "user/list/login", component: UserLoginComponent},

{path: "vendor/list", component: VendorListComponent},
{path: "vendor/create", component: VendorCreateComponent},
{path: "vendor/detail/:id", component: VendorDetailComponent},
{path: "vendor/edit/:id", component: VendorEditComponent},



{path: "**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
