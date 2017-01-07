import {Component, OnInit} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { PlayerService} from './../../services'
import {LoadingPage} from "../loading-indicator/loading-indicator";

@Component({
    selector: 'profile',
    template: require('./content/profile.component.html'),
    styles: [ require('./content/profile.component.css') ]
})
export class ProfileComponent extends LoadingPage implements OnInit{
    public player:any={};
    public kd:number;
    username:string;
    constructor(private  playerService : PlayerService,private route: ActivatedRoute,private router:Router){
        super(true);
    }

    ngOnInit(){
        this.standby();
        this.route.params.subscribe(
            (params) => {
                if(params['username'] !== null){
                    this.username=params['username'];
                    this.standby();
                    console.log("route changed");
                    this.playerService.getPlayer(params['username']).subscribe(
                        (res) => {
                            console.log('got player');
                            this.player=res;
                            this.kd=Math.round((this.player.stats['Eliminations']/this.player.stats['Deaths'])*100)/100;
                            this.ready();
                        }
                    )
                }

            }

        )
    }

    compareTo(){
        this.router.navigate(['compare',this.username])
    }



}