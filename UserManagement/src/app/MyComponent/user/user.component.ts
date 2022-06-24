import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/MyServices/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: Array<any> = [];
  constructor(private user: UsersService) {
    this.users = this.user.getData();
  }

  deleteUser(id: any) {
    this.users.find(function (user) {
      if (user.id === id) {
        user.isDeleted = true;
      }
    });
  }
  ngOnInit(): void {}
}
