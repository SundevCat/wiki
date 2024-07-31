import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/models/user';
import { CallApiService } from 'src/app/services/call-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any
  constructor(public callapi: CallApiService, public router: Router, private cookieService: CookieService) {
    this.fetchUserData()
  }

  ngOnInit(): void {

  }

  handdleLogout() {
    this.cookieService.set('status', 'logout')
    this.router.navigateByUrl('login');
  }
  fetchUserData() {
    this.callapi.getAllUser()?.subscribe({
      next: (data) => {
        this.user = data
        console.log(this.user);
      }
    })
  }
}
