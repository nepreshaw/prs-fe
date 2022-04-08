import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { E404Component } from './e404/e404.component';
import { UserListComponent } from './sales/user/user-list/user-list.component';
import { UserDetailComponent } from './sales/user/user-detail/user-detail.component';
import { UserCreateComponent } from './sales/user/user-create/user-create.component';
import { UserEditComponent } from './sales/user/user-edit/user-edit.component';
import { BoolDisplayPipe } from './bool-display.pipe';
import { UserLoginComponent } from './sales/user/user-login/user-login.component';
import { VendorListComponent } from './sales/vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './sales/vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './sales/vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './sales/vendor/vendor-edit/vendor-edit.component';
import { ProductCreateComponent } from './sales/product/product-create/product-create.component';
import { ProductDetailComponent } from './sales/product/product-detail/product-detail.component';
import { ProductEditComponent } from './sales/product/product-edit/product-edit.component';
import { ProductListComponent } from './sales/product/product-list/product-list.component';
import { RequestListComponent } from './sales/request/request-list/request-list.component';
import { RequestDetailComponent } from './sales/request/request-detail/request-detail.component';
import { RequestEditComponent } from './sales/request/request-edit/request-edit.component';
import { RequestLinesComponent } from './sales/request/request-lines/request-lines.component';
import { RequestCreateComponent } from './sales/request/request-create/request-create.component';
import { RequestRequestsComponent } from './sales/request/request-requests/request-requests.component';
import { RequestReviewListComponent } from './sales/request/request-review-list/request-review-list.component';
import { RequestReviewItemComponent } from './sales/request/request-review-item/request-review-item.component';
import { RequestlineCreateComponent } from './sales/requestline/requestline-create/requestline-create.component';
import { RequestlineEditComponent } from './sales/requestline/requestline-edit/requestline-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    E404Component,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    BoolDisplayPipe,
    UserLoginComponent,
    VendorListComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorEditComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductListComponent,
    RequestListComponent,
    RequestDetailComponent,
    RequestEditComponent,
    RequestLinesComponent,
    RequestCreateComponent,
    RequestRequestsComponent,
    RequestReviewListComponent,
    RequestReviewItemComponent,
    RequestlineCreateComponent,
    RequestlineEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
