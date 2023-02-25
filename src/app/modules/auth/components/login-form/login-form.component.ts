import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/users/user/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  user: User;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.user = new User();
    this.loginForm = formBuilder.group({
      email: new FormControl(this.user.email, [Validators.required, Validators.email]),
      pass: new FormControl(this.user.pass, [Validators.required])
    });
  }

  ngOnInit(): void { }

  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.user);
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get pass() {
    return this.loginForm.get('pass');
  }

}
