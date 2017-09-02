/* 消息通知 */ 
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import { BaseUrl } from './baseUrl';
import 'rxjs/add/operator/toPromise';

import { getMessage } from '../interface/Messagelnterface'

@Injectable()
export class MessageService {
	private apiUrl: string = new BaseUrl().apiUrl;
	constructor (private http: Http) { }
	// 处理错误
	handleError(error: any): Promise<any> {
		return Promise.reject(error.message || error);
	}

	// 未读消息数量
	getIgnoreMessage(): Promise<any> {
		let searchParams = new URLSearchParams();
		let token = window.localStorage.getItem('token');
		if (token) {
			searchParams.set('accesstoken', token)
		} else {
			console.log('请先登录');
			return 
		}

		let options: RequestOptionsArgs = {
			search: searchParams
		}

		return this.http.get(this.apiUrl + `/message/count`, options)
						 .toPromise()
						 .then(response => response.json())
						 .catch(this.handleError)
	}

	// 获取已读和未读消息
	getMessageDetail(params: getMessage): Promise<any> {
		let searchParams = new URLSearchParams();
		Object.keys(params).forEach(item => searchParams.set(item, params[item]));
		
		let token = window.localStorage.getItem('token');
		if (token) {
			searchParams.set('accesstoken', token)
		} else {
			console.log('请先登录');
			return 
		}

		let options: RequestOptionsArgs = {
			search: searchParams
		}

		return this.http.get(this.apiUrl + '/messages', options)
						 .toPromise()
						 .then(response => response.json())
						 .catch(this.handleError)
	}

	// 全部已读
	postReadMessafe(): Promise<any> {
		let searchParams = new URLSearchParams();
		let token = window.localStorage.getItem('token');
		if (token) {
			searchParams.set('accesstoken', token)
		} else {
			console.log('请先登录');
			return 
		}

		let options: RequestOptionsArgs = {
			search: searchParams
		}

		let body = {}

		return this.http.post(this.apiUrl + `/message/mark_all`, body, options)
						 .toPromise()
						 .then(response => response.json())
						 .catch(this.handleError)
	}

}