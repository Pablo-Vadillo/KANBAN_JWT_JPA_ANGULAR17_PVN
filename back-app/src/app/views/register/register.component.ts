import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  //providers:[ApiService],
  imports: [FormsModule,HttpClientModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm ={
    username: "",
    password: "",
    email:""
  };

  constructor(
    private router: Router,
  ) {}


login() {
  this.router.navigate(['/login'])
}

register() {
  this.router.navigate(['/mainScreen']);
}

redirectTo() {
  this.router.navigate(['/mainScreen'])
  }


}
