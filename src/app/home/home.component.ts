import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../service/network-service';
import { Router } from '@angular/router';
import { ExceptionHandler } from '../exception/exception';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string;
  password: string;
  exceptionHandler = new ExceptionHandler();

  constructor(private service: NetworkService, private router: Router) { }

  ngOnInit() { }

  onClick() {
    if (this.inputsValid()) {
      this.signIn();
    }
  }

  inputsValid() {
    return (this.username !== undefined && this.username.length > 0) && (this.password !== undefined && this.password.length > 0);
  }

  signIn() {
    this.service.signIn(this.username, this.password).subscribe(
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
