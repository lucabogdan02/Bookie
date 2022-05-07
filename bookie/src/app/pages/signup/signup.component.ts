import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  loading: boolean = false;

  constructor(private location: Location, private authService: AuthService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signUpForm.value);
    this.authService.signup(this.signUpForm.get('email')?.value, this.signUpForm.get('password')?.value).then(_ => {
      const user: User = {
        uid: "",
        email: this.signUpForm.get('email')?.value
      };

      console.table(user);

      this.userService.create(user).then(_ => {
        console.log('User added successfully.');
        this.router.navigateByUrl('/main');
      }).catch(error => {
        console.error(error);
      })
    }).catch(error => {
      console.error(error);
    });
  }

  goBack() {
    this.location.back();
  }

}
