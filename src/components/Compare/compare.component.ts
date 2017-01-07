import {Component, OnInit, } from '@angular/core';

import { PlayerService} from './../../services'
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'compare',
    template: require('./content/compare.component.html'),
    styles: [ require('./content/compare.component.css') ]
})
export class CompareComponent implements OnInit{
    hero1:any;
    hero2:any;
    items:Array<any>=[{},{}];
    constructor(private playerService : PlayerService,private route: ActivatedRoute){

    }

    ngOnInit(){
        this.route.params.subscribe((params) => {
           if(params['username']){
               this.playerService.getPlayer(params['username']).subscribe((res) => {
                   this.hero1 = res;
               });
           }
        });
    }

    searchhero1(username:string){
        this.playerService.getPlayer(username).subscribe((res) =>{
            this.hero1 = res;
            console.log('hero1');
            console.log(res);
            if(this.hero2){this.compare();}
        });
    }

    searchhero2(username:string){
        this.playerService.getPlayer(username).subscribe((res) =>{
            this.hero2 = res;
            console.log('hero2');
            console.log(res);
            if(this.hero1) this.compare();
        })
    }

    private compare(){
        let h1=this.hero1;
        let h2= this.hero2;
        console.log(h1);
        console.log(h2);
        this.items = [
            { tag:"Eliminations" , hero1: h1.stats['Eliminations-Average'] , hero2: h2.stats['Eliminations-Average'] },
            { tag:"Solo Kills" , hero1: h1.stats['SoloKills-Average'] , hero2: h2.stats['SoloKills-Average'] },
            {
                tag:"K/D Ratio" ,
                hero1: Math.round(parseFloat(h1.stats['Eliminations'])/ parseFloat(h1.stats['Deaths'])*100)/100,
                hero2: Math.round(parseFloat(h2.stats['Eliminations'])/parseFloat(h2.stats['Deaths'])*100)/100 },
            { tag:"Deaths" , hero1: h1.stats['Deaths'] , hero2: h2.stats['Deaths'] },
            { tag:"Damage Done" , hero1: h1.stats['DamageDone-Average'] , hero2: h2.stats['DamageDone-Average'] },
            { tag:"Healing Done" , hero1: h1.stats['HealingDone-Average'] , hero2: h2.stats['HealingDone-Average'] },
            { tag:"Final Blows" , hero1: h1.stats['FinalBlows-Average'] , hero2: h2.stats['FinalBlows-Average'] },
            { tag:"Objective kills" , hero1: h1.stats['ObjectiveKills-Average'] , hero2: h2.stats['ObjectiveKills-Average'] },
            { tag: "Objective time" , hero1: h1.stats['ObjectiveTime-Average'] , hero2: h2.stats['ObjectiveTime-Average'] },

        ];
        console.log("items");
        console.log(this.items);
    }

}