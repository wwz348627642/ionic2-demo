import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TopicService } from '../../service/TopicService'
import { AuthService } from '../../service/AuthService'

import { ArticlePage  } from '../article/article'
import { WritePage } from '../write/write';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    TopicService,
    AuthService
  ]
})
export class HomePage {

	topicList: any

	topicPage: number = 1

  constructor(
  	public navCtrl: NavController,
  	public topicService: TopicService,
    public authService: AuthService,
  ) { }

 	// 获取首页列表
  getTopicList(page: number = 1, $event?: any): void {
  	this.topicService.getTopics({ tab: 'share', page: page, limit: 10, mdrender: false })
  		.then(response => {
  			this.topicPage += 1;

  			if (page === 1) {
  				this.topicList = response.data
  			} else {
  				$event.complete();
  				this.topicList = this.topicList.concat(response.data)
  			}
  		})
  		.catch(error => console.log(error))
  }

  // 上拉加载更多
  doInfinite($event): void {
  	this.getTopicList(this.topicPage, $event)
  }

  // 单个文章跳转
  gotToarticleItem(id: string): void {
  	this.navCtrl.push(ArticlePage, { id, name: '最新' })
  }

  checkLogin(): void {
    this.authService.userLogin()
      .then(res => console.log('用户登录'))
      .catch(error => console.log('用户未登录'))
  }

  // 跳转到写的页面
  goToWrite(): void {
    this.navCtrl.push(WritePage, { tab: 'share' });
  }

  
  ngOnInit():void {
  	this.getTopicList()
    this.checkLogin()
  }
}
