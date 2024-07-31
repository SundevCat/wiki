import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { zip } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wiki';
  formLogin: any
  formRegis: any
  isRegister: any
  cookieValue: any
  constructor(public formbuilder: FormBuilder, private cookieService: CookieService, public router: Router) {
    this.cookieValue = cookieService.get('status')
    this.isRegister = null
    this.formLogin = formbuilder.group({
      userName: null,
      password: null
    })
    this.formRegis = formbuilder.group({
      userName: null,
      password: null
    })
  }
  ngOnInit(): void {

    if (this.cookieService.get('status') == 'login') {
      this.router.navigateByUrl('home')
    }

  }

  handleSubmit() {
    this.cookieService.set('status', 'login')
    this.cookieValue = this.cookieService.get('status')
    this.router.navigateByUrl('home');
  }
  navigateToRegis() {

  }

}

