import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  model: any = {};

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
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
    let errMsg = (error.error.message) ? error.error.message : 'erro ao criar usuário';
    alert(errMsg)
  }
}
