
import { Injectable } from '@angular/core';
import { Http,Response,Headers,URLSearchParams,RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { ExtractService } from './extract.service'
@Injectable()
export class ApiService {

    constructor(private http:Http,private extractService: ExtractService) {
    }

    get(url:string,params){
        console.log(params);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token',params['x-access-token']);
        if(params.username) url += '/'+ params.username;
        if(params.extra) url += '/' + params.extra;
        if(params.top) url += '/' + params.top;
        if(params.endvalue) url += '/' + params.endvalue;
        //options
        let options = new RequestOptions({
            headers: headers
        });
        return this.http
            .get(url, options)
            .catch(this.extractService.handleError);
    }

    post(url:string,data){
        //add headers
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');


        //options
        let options = new RequestOptions({
            headers: headers,
        });
        //post answers and return score
        return this.http.post(url, JSON.stringify(data), options)
            .catch(this.extractService.handleError);
    }

}