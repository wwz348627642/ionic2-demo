/* 主题收藏 */ 
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import { BaseUrl } from './baseUrl';
import 'rxjs/add/operator/toPromise';

import { postTopicCollectParams, deleteTopicCollectParams } from '../interface/TopicCollectInterface'
@Injectable()
export class TopicCollectService {

	private apiUrl: string = new BaseUrl().apiUrl + '/topic_collect';

	constructor (private http: Http) { }

	// 处理错误
	handleError(error: any): Promise<any> {
		return Promise.reject(error.message || error);
	}

	// 收藏主题
	postTopics(params: postTopicCollectParams): Promise<any> {
		let searchParams = new URLSearchParams();
		Object.keys(params).forEach(item => searchParams.set(item, params[item]));

		let token = window.localStorage.getItem('token');

		if (token) {
			searchParams.set('accesstoken', token);
		} else {
			console.log('请先登录');
			return
		}

		let options: RequestOptionsArgs = {
			search: searchParams
		}
		let body = {}

		return this.http.post(this.apiUrl + `/collect`, body, options)
						 .toPromise()
						 .then(response => response.json())
						 .catch(this.handleError)
	}

	// 取消主题
	deleteTopic(params: deleteTopicCollectParams): Promise<any> {
		let searchParams = new URLSearchParams();
		Object.keys(params).forEach(item => searchParams.set(item, params[item]));
		let token = window.localStorage.getItem('token');

		if (token) {
			searchParams.set('accesstoken', token);
		} else {
			console.log('请先登录');
			return
		}

		let options: RequestOptionsArgs = {
			search: searchParams
		}
		let body = {}

		return this.http.post(this.apiUrl + `/de_collect`, body, options)
						 .toPromise()
						 .then(response => response.json())
						 .catch(this.handleError)
	}

	// 用户所收藏的主题
	getUserTopicCollect(): Promise<any> {
		let searchParams = new URLSearchParams();
		let loginname = 'ask'
		let options: RequestOptionsArgs = {
			search: searchParams
		}
		return this.http.get(this.apiUrl + `/${loginname}`, options)
						 .toPromise()
						 .then(response => response.json())
						 .catch(this.handleError)
	}

}