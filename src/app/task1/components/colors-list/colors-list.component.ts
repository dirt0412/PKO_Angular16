import { Component } from '@angular/core';

@Component({
  selector: 'app-colors-list',
  templateUrl: './colors-list.component.html',
  styleUrls: ['./colors-list.component.scss']
})
export class ColorsListComponent {
  colors: string[] = ['yellow', 'green', 'blue', 'red', 'pink', 'brown', 'black'];
}
