import { Component ,OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms'

import { input,textinput } from './../../models'
import {InputControl} from "../../services/input-control.service";
import {ApiService} from "../../services/api.service";


@Component({
    selector: 'api',
    template: require('./content/api.component.html'),
    styles: [ require('./content/api.component.css') ]
})
export class ApiComponent implements OnInit{
    api:string='https://api-overstats.herokuapp.com/Api';
    public routes:Array<any>;
    register:FormGroup;
    registerInput;
    msg:string;

    constructor(private ic:InputControl,private apiservice:ApiService){}

    ngOnInit(){
        this.registerInput=[
            new textinput({
                key:'username',
                label:'Username',
                type:'text',
                required:true,
            }),
            new textinput({
                key:'password',
                label:'Your password',
                type:'password',
                required:true,
            }),
            new textinput({
                key:'confirmpass',
                label:'Confirm password',
                type:'password',
                required:true,
            })
        ];
        this.register=this.ic.toFormgroup(this.registerInput);
        const apiroutes=[
            {
                url:'/Authenticate',
                urlexample:'/Authenticate',
                name:'Authenticate',
                desc:'This will give you an acces token so you can acces the api',
                httptype:'post',
                params:[
                    new textinput({
                        key:'username',
                        label:'Your username',
                        type:'text',
                        desc:'The username you registered with',
                        required:true,
                    }),
                    new textinput({
                        key:'password',
                        label:'Your password',
                        type:'password',
                        desc:'Your password',
                        required:true,
                    })
                ],

            },
            {
                url:'/Players/All',
                urlexample:'/PLayers/All',
                name:'Get all Players',
                desc:'Returns a list with all players',
                httptype:'get',
                params:[
                    new textinput({
                        key:'x-access-token',
                        label:'x-access-token(header)',
                        type:'text',
                        desc:'Token for authentication needs to be in the header of your request',
                        required:true,
                    }),
                ],

            },
            {
                url:'/Players/User',
                urlexample:'/Players/User/{username}',
                name:'Get a player',
                desc:'Returns a player with stats and herodetails',
                httptype:'get',
                params:[
                    new textinput({
                        key:'username',
                        label:'The username of the player',
                        type:'text',
                        desc:'The username of the player you want to request(battletag)',
                        required:true,
                    }),
                    new textinput({
                        key:'x-access-token',
                        label:'x-access-token',
                        type:'text',
                        desc:'Token for authentication needs to be in the header of your request',
                        required:true,
                    }),
                ],

            },
            {
                url:'/Players',
                urlexample:'/Players/{query}',
                name:'Query users',
                desc:'Returns an Array of players where the username of the player contains the given query (limits to 10 players)',
                httptype:'get',
                params:[
                    new textinput({
                        key:'username',
                        label:'The query',
                        type:'text',
                        desc:'The query you want to search for',
                        required:true,
                    }),
                    new textinput({
                        key:'x-access-token',
                        label:'x-access-token(header)',
                        type:'text',
                        desc:'Token for authentication needs to be in the header of your request',
                        required:true,
                    }),
                ],

            },
            {
                url:'/Players/User',
                urlexample:'/Players/User/{username}/Stats',
                name:'Get the stats of a player',
                desc:'Returns a players statistics',
                httptype:'get',
                params:[
                    new textinput({
                        key:'username',
                        label:'The username of the player',
                        type:'text',
                        desc:'The username of the player you want to request(battletag)',
                        required:true,
                    }),
                    new textinput({
                        key:'extra',
                        value:'Stats',
                        type:'hidden',
                        required:true,
                    }),
                    new textinput({
                        key:'x-access-token',
                        label:'x-access-token(header)',
                        type:'text',
                        desc:'Token for authentication needs to be in the header of your request',
                        required:true,
                    }),
                ],

            },
            {
                url:'/Players/User',
                urlexample:'/Players/User/{username}/Heroes',
                name:'Get the hero play time of a player',
                desc:'Returns a array of heroes',
                httptype:'get',
                params:[
                    new textinput({
                        key:'username',
                        label:'The username of the player',
                        type:'text',
                        desc:'The username of the player you want to request(battletag)',
                        required:true,
                    }),
                    new textinput({
                        key:'extra',
                        value:'Heroes',
                        type:'hidden',
                        required:true,
                    }),
                    new textinput({
                        key:'x-access-token',
                        label:'x-access-token(header)',
                        type:'text',
                        desc:'Token for authentication needs to be in the header of your request',
                        required:true,
                    }),
                ],

            },
            {
                url:'/Ladder/Top',
                urlexample:'/Ladder/Top/{start}/{end}',
                name:'Get a snapshot of the ranking',
                desc:'Returns a list of players sorted on their place in the ranking',
                httptype:'get',
                params:[
                    new textinput({
                        key:'top',
                        label:'The start value',
                        type:'number',
                        desc:'The highest ranking player you want to get',
                        required:true,
                    }),
                    new textinput({
                        key:'endvalue',
                        label:'The end value',
                        type:'number',
                        desc:'The lowest ranking player you want to get',
                        required:true,
                    }),
                    new textinput({
                        key:'x-access-token',
                        label:'x-access-token(header)',
                        type:'text',
                        desc:'Token for authentication needs to be in the header of your request',
                        required:true,
                    }),
                ],

            },
            {
                url:'/Ladder/Distribution',
                urlexample:'/Ladder/Distribution',
                name:'The rank distribution',
                desc:'Returns the distribution of the players on the ranking ladder each value in the array represents a 50SR-rating range starting from 0 to 5000',
                httptype:'get',
                params:[
                    new textinput({
                        key:'x-access-token',
                        label:'x-access-token(header)',
                        type:'text',
                        desc:'Token for authentication needs to be in the header of your request',
                        required:true,
                    }),
                ],

            },
        ];

        this.routes=apiroutes;
    }

    onSubmit(){
        this.apiservice.post(this.api+ '/Register',this.register.value).subscribe( res => this.msg=res.json().msg);
    }

}