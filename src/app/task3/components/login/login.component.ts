import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule ],//https://angular.io/extended-diagnostics/NG8103
})
export class LoginComponent {

  loggedIn: boolean = false;
  username: string = '';

  constructor(private router: Router) {}

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
    this.username = '';
    this.router.navigate(['/']);
  }

}
