import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthService } from '../../service/AuthService';

import { LoginPage } from '../login/login';
import { MessagePage } from '../message/message';
import { UserPage } from '../user/user';
import { ArticlePage } from '../article/article';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
  providers: [
    AuthService
  ]
})
export class SettingPage {

  user: any

  constructor(
  	public navCtrl: NavController,
    public authService: AuthService
  ) { }

  checkUser(): void {
    let userInfo = window.localStorage.getItem('user');
    if (userInfo) {
      this.user = JSON.parse(userInfo);
    } else {
      console.log('用户未登录')
    }
  }

  goToLogin(): void {
    this.navCtrl.push(LoginPage);
  }

  goToUserDetail(): void {
    this.navCtrl.push(UserPage);
  }

  goToArticleItem(id: string): void {
    this.navCtrl.push(ArticlePage, { id })
  }

  goToAbout(): void {
    this.navCtrl.push(AboutPage);
  }

  goToMessage(): void {
    let user = this.user
    if (user) {
      this.navCtrl.push(MessagePage);
    } else {
      this.navCtrl.push(LoginPage);
    }
  }

  ngOnInit(): void {
    this.checkUser();
  }

}
