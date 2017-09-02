import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { TopicService } from '../../service/TopicService';

import { ArticlePage } from '../article/article'

@Component({
  selector: 'page-job',
  templateUrl: 'job.html',
  providers: [
  	TopicService
  ]
})
export class JobPage {

	jobList: any

	jobPage: number = 1

  constructor(
  	public navCtrl: NavController,
  	public topicService: TopicService
  ) { }

  // 获取工作列表
  getJobList(page: number = 1, $event?: any): void {
  	this.topicService.getTopics({ tab: 'job', page: page, limit: 10, mdrender: false })
  		.then(response => {
  			this.jobPage += 1;
  			if (page === 1) {
  				this.jobList = response.data
  			} else {
  				$event.complete();
  				this.jobList = this.jobList.concat(response.data)
  			}
  		})
  		.catch(error => console.log(error))
  }

  // 上拉加载更多
  doInfinite($event): void {
  	this.getJobList(this.jobPage, $event)
  }

  // 单个文章跳转
  gotToarticleItem(id: string): void {
  	this.navCtrl.push(ArticlePage, { id, name: '招聘' })
  }


  ngOnInit(): void {
  	this.getJobList()
  }

}
