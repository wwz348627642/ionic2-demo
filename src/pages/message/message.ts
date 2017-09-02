import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MessageService } from '../../service/MessageService'

@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
  providers: [
  	MessageService
  ]
})
export class MessagePage {

	messageInfo: any

  constructor(
  	public navCtrl: NavController,
  	public messageService: MessageService
  ) { }

  getMessageDetail (): void {
  	this.messageService.getMessageDetail({})
  		.then(res => this.messageInfo = res.data)
  		.catch(error => console.log(error))
  }

  ngOnInit(): void {
  	this.getMessageDetail()
  }

}
