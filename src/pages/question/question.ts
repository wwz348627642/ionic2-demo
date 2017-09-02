import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TopicService } from '../../service/TopicService';

import { ArticlePage } from '../article/article'
import { WritePage } from '../write/write'

@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
  providers: [
    TopicService
  ]
})

export class QuestionPage {

  questionList: any

  questionPage: number = 1

  constructor(
  	public navCtrl: NavController,
    public topicService: TopicService
  ) {}

  // 获取问答列表
  getQuestionList(page: number = 1, $event?: any):void {
    this.topicService.getTopics({ tab: 'ask', page: page, limit: 10, mdrender: false })
      .then(res => { 
        this.questionPage += 1;

        if (page === 1) {
          this.questionList = res.data
        } else {
          this.questionList = this.questionList.concat(res.data)
        }
      })
      .catch(error => console.log(error))
  }

  // 加载更多
  doInfinite($event):void {
    this.getQuestionList(this.questionPage, $event)
  }

  goToWrite():void {
    this.navCtrl.push(WritePage, { tab: 'ask' })
  }

  // 跳转
  gotToarticleItem(id: string): void {
    this.navCtrl.push(ArticlePage, { id, name: '问答' })
  }

  ngOnInit(): void {
    this.getQuestionList()
  }

}
