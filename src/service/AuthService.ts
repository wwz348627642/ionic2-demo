/* 用户登录 */
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import { BaseUrl } from './baseUrl';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AuthService {
	private apiUrl: string = new BaseUrl().apiUrl;

	constructor (private http: Http) { }
	// 处理错误
	handleError(error: any): Promise<any> {
		return Promise.reject(error.message || error);
	}

	// 获取用户详情
	getUserDetail(): Promise<any> {
		let searchParams = new URLSearchParams();

		let user = window.localStorage.getItem('user');

		let loginname: string = JSON.parse(user).loginname;

		let options: RequestOptionsArgs = {
			search: searchParams
		}

		return this.http.get(this.apiUrl + `/user/${loginname}`, options)
						 .toPromise()
						 .then(response => response.json())
						 .catch(this.handleError)
	}

	// 验证token的正确性
	userLogin(): Promise<any> {
		let searchParams = new URLSearchParams();
		let token = window.localStorage.getItem('token');

		if (token) {
			searchParams.set('accesstoken', token)
		} else {
			return this.handleError('用户未登录')
		}

		let options: RequestOptionsArgs = {
			search: searchParams
		}

		let body = {}

		return this.http.post(this.apiUrl + `/accesstoken`, body, options)
					   .toPromise()
						 .then(response => {
						 	 let user = response.json(); 
						 	 window.localStorage.setItem('user', JSON.stringify(user))
						 })
						 .catch(this.handleError)
	}

}