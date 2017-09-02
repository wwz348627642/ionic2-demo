/* 主题 */
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import { BaseUrl } from './baseUrl';
import 'rxjs/add/operator/toPromise';

import { TopicsParams, TopicItemParams, NewTopicItemParams, UpdateTopicParams } from '../interface/TopicsInterface'

@Injectable()
export class TopicService {

	private apiUrl: string = new BaseUrl().apiUrl;

	constructor (private http: Http) { }
	// 处理错误
	handleError(error: any): Promise<any> {
		return Promise.reject(error.message || error);
	}

	// 主题首页
	getTopics(params: TopicsParams): Promise<any> {
		let searchParams = new URLSearchParams();
		Object.keys(params).forEach(item => searchParams.set(item, params[item]));

		let options: RequestOptionsArgs = {
			search: searchParams
		}

		return this.http.get(this.apiUrl + `/topics`, options)
						 .toPromise()
						 .then(response => response.json())
						 .catch(this.handleError)
	}

	// 主题详情
	getTopicItem(params: TopicItemParams): Promise<any> {
		let searchParams = new URLSearchParams();
		// Object.keys(params).forEach(item => searchParams.set(item, params[item]));

		let options: RequestOptionsArgs = {
			search: searchParams
		}

		return this.http.get(this.apiUrl + `/topic/${params.id}`, options)
						 .toPromise()
						 .then(response => response.json())
						 .catch(this.handleError)
	}

	// 新建主题
	postNewTopic(params: NewTopicItemParams): Promise<any> {
		let searchParams = new URLSearchParams();
		Object.keys(params).forEach(item => searchParams.set(item, params[item]));

		let token = window.localStorage.getItem('token');

		if (token) {
			searchParams.set('accesstoken', token);
		} else {
			console.log('请先登录')
			return 
		}


		let options: RequestOptionsArgs = {
			search: searchParams
		}

		let body = {}	

		return this.http.post(this.apiUrl + `/topics`, body,  options)
						 .toPromise()
						 .then(response => response.json())
						 .catch(this.handleError)
	}

	// 编辑主题
	updateTopic(params: UpdateTopicParams): Promise<any> {
		let searchParams = new URLSearchParams();
		Object.keys(params).forEach(item => searchParams.set(item, params[item]));

		let token = window.localStorage.getItem('token');

		if (token) {
			searchParams.set('accesstoken', token);
		} else {
			console.log('请先登录')
			return 
		}

		let options: RequestOptionsArgs = {
			search: searchParams
		}

		let body = {}	

		return this.http.post(this.apiUrl + `/topics/update`, body,  options)
						 .toPromise()
						 .then(response => response.json())
						 .catch(this.handleError)
	}

}