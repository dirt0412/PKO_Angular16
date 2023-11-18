import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorsListComponent } from './task1/components/colors-list/colors-list.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { AccountsListComponent } from './task2/components/accounts-list/accounts-list.component';
import { LoginComponent } from './task3/components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'task1', component: ColorsListComponent },
  { path: 'task2', component: AccountsListComponent },
  { path: 'task3', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
