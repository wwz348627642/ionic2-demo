import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { ImagePicker } from 'ionic-native';



@Component({
  selector: 'page-write',
  templateUrl: 'write.html',
})
export class WritePage {

	write = {
		image: ''
	}

	isWeb: boolean = this.platform.is('mobileweb')

	constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public platform: Platform
  ) { }

	// 选择图片
	chooseImage ():void {
		ImagePicker.getPictures({})
			.then(result => { 
				let a = result.reduce((prev, next) => prev + next );
				console.log('uri=', a); 
			})
			.catch(error => console.log('打开失败'))
	}

	// 上传图片
	imageChange ($event):void {
		let file = $event.target.files[0];
		console.log($event)
		let reader = new FileReader();
		reader.onload = e => {
			this.write.image = reader.result;
		}

		reader.readAsDataURL(file);

	}


	ngOnInit ():void {
		console.log(this.navParams)
	}

}