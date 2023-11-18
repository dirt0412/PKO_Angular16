import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FilterPipe } from '../pipes/filter.pipe';



@NgModule({
  declarations: [
    AccountsListComponent,
    FilterPipe,
    
  ],
  imports: [
    //CommonModule,
    BrowserModule,
  ]
})
export class Task2Module { }
