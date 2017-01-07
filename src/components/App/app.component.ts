import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import '../rxjs-operators';
import {CookieService} from "../../services/cookie.service";
import {ApiService} from "../../services/api.service";


@Component({
    selector: 'app',
    template: require('./content/app.component.html'),
    styles: [ require('./content/app.component.css') ]
})
export class AppComponent implements OnInit{
    public apiurl:string='https://api-overstats.herokuapp.com/Api';
    constructor(private router: Router,private cs: CookieService,private api:ApiService){}

    ngOnInit(){
        if(!this.cs.getCookie('x-access-token')){
            this.api.post(this.apiurl + '/Authenticate',{username: 'overstats',password:'Azerty123'}).subscribe(
                (res) => this.cs.setCookie(res.json().token)
            )
        }
    }

}