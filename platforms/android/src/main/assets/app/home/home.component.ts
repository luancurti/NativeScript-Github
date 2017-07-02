import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';

@Component({
	selector: 'home',
	moduleId: module.id,
	templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  users;

  errorMessage: string;

	constructor(private userService: UserService) { }

  ngOnInit(): void {
		this.userService.getUsers()
      .subscribe(
        users => this.users = users,
        error => this.errorMessage = <string>error
      );
	}
}
