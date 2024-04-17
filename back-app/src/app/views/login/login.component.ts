import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  //providers:[ApiService],
  imports: [FormsModule,HttpClientModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm ={
    username: "",
    password: ""
  };

  constructor(
    private router: Router,
  ) {}


login() {
  this.router.navigate(['/mainScreen'])
}

register() {
  this.router.navigate(['/register']);
}


redirectTo() {
  this.router.navigate(['/mainScreen'])
  }

}
