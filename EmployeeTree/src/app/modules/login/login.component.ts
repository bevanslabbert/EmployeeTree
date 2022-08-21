import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username : any
  password : any
  loginForm = new FormControl('', [Validators.required]);
  

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }
  
  async login() {
    let username = this.username;
    let password = this.password;
    this.authenticationService.login(username, password)
  }

}
