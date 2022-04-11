import { Component, NgModule } from '@angular/core';
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
import { ProductListComponent } from './sales/product/product-list/product-list.component';
import { ProductCreateComponent } from './sales/product/product-create/product-create.component';
import { ProductDetailComponent } from './sales/product/product-detail/product-detail.component';
import { ProductEditComponent } from './sales/product/product-edit/product-edit.component';
import { RequestCreateComponent } from './sales/request/request-create/request-create.component';
import { RequestDetailComponent } from './sales/request/request-detail/request-detail.component';
import { RequestEditComponent } from './sales/request/request-edit/request-edit.component';
import { RequestListComponent } from './sales/request/request-list/request-list.component';
import { RequestlineCreateComponent } from './sales/requestline/requestline-create/requestline-create.component';
import { RequestlineEditComponent } from './sales/requestline/requestline-edit/requestline-edit.component';
import { RequestLinesComponent } from './sales/request/request-lines/request-lines.component';
import { RequestReviewListComponent } from './sales/request/request-review-list/request-review-list.component';
import { RequestReviewItemComponent } from './sales/request/request-review-item/request-review-item.component';

const routes: Routes = [
{path: "", redirectTo:"/home", pathMatch:"full"},
{path: "home", component: HomeComponent},

{path: "user/list", component: UserListComponent},
{path: "user/create", component: UserCreateComponent},
{path: "user/detail/:id", component: UserDetailComponent},
{path: "user/edit/:id", component: UserEditComponent},
{path: "login", component: UserLoginComponent},

{path: "vendor/list", component: VendorListComponent},
{path: "vendor/create", component: VendorCreateComponent},
{path: "vendor/detail/:id", component: VendorDetailComponent},
{path: "vendor/edit/:id", component: VendorEditComponent},

{path: "product/list", component: ProductListComponent},
{path: "product/create", component: ProductCreateComponent},
{path: "product/detail/:id", component: ProductDetailComponent},
{path: "product/edit/:id", component: ProductEditComponent},

{path: "request/list", component: RequestListComponent},
{path: "request/review/:userid", component: RequestReviewListComponent},
{path: "request/review/:id", component: RequestReviewItemComponent},
{path: "request/lines/:id", component: RequestLinesComponent},
{path: "request/create", component: RequestCreateComponent},
{path: "request/detail/:id", component: RequestDetailComponent},
{path: "request/edit/:id", component: RequestEditComponent},

{path: "requestline/create/:requestid", component: RequestlineCreateComponent},
{path: "requestline/edit/:id", component: RequestlineEditComponent},


{path: "**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
