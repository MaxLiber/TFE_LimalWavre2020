import { Component, OnInit } from '@angular/core';
import { AuthUserModel } from '../../model/auth-user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-liste',
  templateUrl: './user-liste.component.html',
  styleUrls: ['./user-liste.component.scss']
})
export class UserListeComponent implements OnInit {

  users: Array<AuthUserModel>;
  
  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void 
  {
    this.authService.getUserList()
      .subscribe(
        users => this.users=users
      );
  }

}
