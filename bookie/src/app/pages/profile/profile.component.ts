import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import {AuthService} from "../../shared/services/auth.service";
import {User} from "../../shared/models/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private authService: AuthService, private userService: UserService) {
    this.authService.isUserLoggedIn().subscribe((user: any | null | undefined) => {
      this.user = user;
    }, (error: any) => {
      console.log(error);
    });
  }

  ngOnInit(): void {
    console.log(this.user);
  }

  deleteUser(id: string){
    console.log("deleting userid: "+id);
    this.userService.delete(id);
  }

}
