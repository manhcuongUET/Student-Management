import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LocalStoreService } from 'src/app/core/services/local-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private localStorageSv: LocalStoreService) {}

  ngOnInit(): void {
    // this.authService.login();
  }

  login(){
    // this.authService.login()

    // setItem userinfo to localStorage
  }
}
