import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { E404Component } from './e404/e404.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path: "", redirectTo:"/home", pathMatch:"full"},
{path: "home", component: HomeComponent},


{path: "**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
