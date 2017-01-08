
import { Injectable } from '@angular/core';
import { Http,Response,Headers,URLSearchParams,RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { ExtractService } from './extract.service'
import {CookieService} from "./cookie.service";
@Injectable()
export class PlayerService {
    apiUrl:string="https://api-overstats.herokuapp.com/Api";
    constructor(private http:Http,private extractService: ExtractService,private cs: CookieService) {
    }

    getTop(start,end){
        //fix at the end of the playerbase
        if(start > 3180 || end > 3206 )return null;
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token',this.cs.getCookie('x-access-token'));
        //routeparams
        let params = new URLSearchParams();
        //options
        let options = new RequestOptions({
            headers: headers,
            search: params
        });
        return this.http
            .get(this.apiUrl +'/Ladder/Top/'+ start + '/' + end, options)
            .map(this.extractService.extractData)
            .catch(this.extractService.handleError);
    }

    search(query:string){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token',this.cs.getCookie('x-access-token'));
        //routeparams
        let params = new URLSearchParams();
        //options
        let options = new RequestOptions({
            headers: headers,
            search: params
        });
        return this.http
            .get(this.apiUrl +'/Players/' + query, options)
            .map(this.extractService.extractData)
            .catch(this.extractService.handleError);
    }

    ranking(){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token',this.cs.getCookie('x-access-token'));
        //routeparams
        let params = new URLSearchParams();
        //options
        let options = new RequestOptions({
            headers: headers,
            search: params
        });
        return this.http
            .get(this.apiUrl +'/Ladder/Distribution', options)
            .map(this.extractService.extractData)
            .catch(this.extractService.handleError);
    }

    getPlayer(player:string){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token',this.cs.getCookie('x-access-token'));
        //routeparams
        let params = new URLSearchParams();
        //options
        let options = new RequestOptions({
            headers: headers,
            search: params
        });
        return this.http
            .get(this.apiUrl +'/Players/User/' + player, options)
            .map(this.extractService.extractData)
            .catch(this.extractService.handleError);
    }
}