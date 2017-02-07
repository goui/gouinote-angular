import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { NetworkService } from '../service/network-service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: User[];

  constructor(private networkService: NetworkService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.networkService.getUserList().subscribe(
      next => {
        this.userList = next;
      },
      error => {
        alert(JSON.stringify(error));
      },
      () => {
        // TODO
      }
    );
  }

  onAllUsersClick() {
    // TODO get notes from all users
  }

}
