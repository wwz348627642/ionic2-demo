import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AuthService } from '../../service/AuthService'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
  	AuthService
  ]
})
export class LoginPage {

	token: string

	constructor(
  	public navCtrl: NavController,
  	public authService: AuthService
  ) { }


	userLogin():void {
		window.localStorage.setItem('token', this.token)
		this.authService.userLogin()
			.then(res => this.navCtrl.pop())
			.catch(error => console.log(error))
	}

}