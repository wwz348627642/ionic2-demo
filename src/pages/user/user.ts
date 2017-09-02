import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthService } from '../../service/AuthService';
 import { ArticlePage } from '../article/article';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
  providers: [
    AuthService
  ]
})
export class UserPage { 

	userInfo: any

  constructor(
  	public navCtrl: NavController,
    public authService: AuthService
  ) { }

  getUserInfo ():void {
  	this.authService.getUserDetail()
  		.then(res => this.userInfo = res.data)
  		.catch(error => console.log(error))
  }

  goToArticleItem(id: string): void {
    this.navCtrl.push(ArticlePage, { id })
  }

  ngOnInit ():void {
  	this.getUserInfo()
  }

}
