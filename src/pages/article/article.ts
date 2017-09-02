import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TopicService } from '../../service/TopicService'


@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
  providers: [
  	TopicService
  ]
})
export class ArticlePage { 

	articleContent: any
  articleTitle: string

	constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public topicService: TopicService
  ) { }


  getArticleItem (): void {
  	this.topicService.getTopicItem({ id: this.navParams.get('id') })
  		.then(res => { 
  			this.articleContent = res.data;
  		})
  		.catch(error => console.log(error))
  }

  ngOnInit(): void {
    this.articleTitle = this.navParams.get('name');     
  	this.getArticleItem();
  }

}