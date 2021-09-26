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
    this.alertService.alert("teste")
  }

  register() {
    var newUser = new User(this.model.userId, this.model.password)
    console.log(newUser)
    this.userService.createUser(newUser)
    .subscribe(user => {
      alert("user " + user.id + " created")
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
