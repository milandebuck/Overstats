import { Component ,OnInit} from '@angular/core';
import { InfiniteScroll } from 'angular2-infinite-scroll';

import { PlayerService} from './../../services'
import {Router} from "@angular/router";

@Component({
    selector: 'leaderboard',
    directives: [InfiniteScroll],
    template: require('./content/leaderboard.component.html'),
    styles: [ require('./content/leaderboard.component.css') ]
})
export class LeaderboardComponent implements OnInit{

    players:Array<any>;
    start:number = 0;
    end:number = 20;
    loading:boolean = false;
    constructor(private  playerService : PlayerService,private router:Router){}

    ngOnInit(){
        this.playerService.getTop(this.start,this.end).subscribe((res) => {
            this.players=res;
        })
    }

    onScroll(){
        this.loading = true;
        this.start  += 20;
        this.end +=20;
        this.playerService.getTop(this.start,this.end).subscribe((res) => {
           res.map(player => this.players.push(player));
        });

    }

    toProfile(username:string){
        this.router.navigate(['/profile', username]);
    }
}