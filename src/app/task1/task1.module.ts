import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorsListComponent } from './components/colors-list/colors-list.component';



@NgModule({
  declarations: [
    ColorsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ColorsListComponent]
})
export class Task1Module {
  
}
