import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../service/network-service';
import { ModelService } from '../service/model-service';
import { Router } from '@angular/router';
import { ExceptionHandler } from '../exception/exception';
import { User } from '../model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string;
  password: string;
  exceptionHandler = new ExceptionHandler();
  user: User;

  constructor(private networkService: NetworkService, private modelService: ModelService, private router: Router) { }

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
    this.networkService.signIn(this.username, this.password).subscribe(
      next => {
        this.user = next;
      },
      error => {
        const message = this.exceptionHandler.getMessage(error);
        console.log(message);
        alert(message);
      },
      () => {
        this.modelService.setConnecteduser(this.user);
        this.router.navigateByUrl('/main');
      }
    );
  }

}
