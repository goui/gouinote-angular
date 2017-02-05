import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../service/network-service';
import { Router } from '@angular/router';
import { ExceptionHandler } from '../exception/exception';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  username: string;
  password: string;
  exceptionHandler = new ExceptionHandler();

  constructor(private service: NetworkService, private router: Router) { }

  ngOnInit() { }

  onClick() {
    if (this.inputsValid()) {
      this.createAccount();
    }
  }

  inputsValid() {
    return (this.username !== undefined && this.username.length > 0) && (this.password !== undefined && this.password.length > 0);
  }

  createAccount() {
    this.user.nickname = this.username;
    this.user.password = this.password;
    this.service.createAccount(this.user).subscribe(
      next => {
        // TODO
      },
      error => {
        const message = this.exceptionHandler.getMessage(error);
        console.log(message);
        alert(message);
      },
      () => {
        this.router.navigateByUrl('/note-list');
      }
    );
  }

}
