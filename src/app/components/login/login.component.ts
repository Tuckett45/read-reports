import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/shared/services/auth.service';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title = 'read-reports';
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService){
    this.loginForm = this.formBuilder.group({
        username: '',
        password: ''
      });
}

  login(){
    this.authService.getAuth(this.loginForm)
  }
}
