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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
