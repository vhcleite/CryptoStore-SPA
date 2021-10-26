import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  model: any = {};

  constructor(
    private userService: UserService, 
    private router: Router,
    private alertService: AlertifyService
    ) { }

  ngOnInit(): void {
  }

  register() {
    var newUser = new User(this.model.userId, this.model.password)
    console.log(newUser)
    this.userService.createUser(newUser)
    .subscribe(user => {
      this.alertService.success('Usuário criado com sucesso')
      this.router.navigate(["/"])
    }, error => {
      this.handleError(error)
    })
  }

  private handleError(error: any) { 
    let errMsg = (error.error.message) ? error.error.message : error.message;
    this.alertService.error(errMsg)
  }
}
