import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  imageSrc = "assets/images/book2.png"
  imageSrc2 = "assets/images/cart.png"
  imageSrc3 = "assets/images/user.png"
  loggedInUser?: firebase.default.User | null;

  constructor(private authService: AuthService) { }

  ngOnInit(){
    this.authService.isUserLoggedIn().subscribe(user => {
      console.log(user);
      this.loggedInUser = user;
      localStorage.setItem('user', JSON.stringify(this.loggedInUser));
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));
    });
  }

  logout(){
    this.authService.logout();
  }

}
