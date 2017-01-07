import {Component, OnInit, ElementRef,Output,Input,EventEmitter} from '@angular/core';

import { PlayerService} from './../../services'
import {Router} from "@angular/router";

@Component({
    selector: 'searchbar',
    host: {
        '(document:click)': 'handleClick($event)',
    },
    template: require('./content/searchbar.component.html'),
    styles: [ require('./content/searchbar.component.css') ]
})
export class SearchBarComponent implements OnInit{

    public query = '';
    public elementRef;
    loading:boolean = false;
    players:Array<any>;
    @Input() redirect:boolean;
    @Output() usersearch=new EventEmitter();
    constructor(private  playerService : PlayerService,private myElement: ElementRef,private router:Router){
        this.elementRef = myElement;
    }

    ngOnInit(){
    }

    search(){
        if(this.query !== ''){
            this.loading=true;
            this.playerService.search(this.query).subscribe((res) => {
                if(res){
                    this.players = res;
                    this.loading = false;
                }
            })
        }
        if(this.query === ''){

        }
    }

    handleClick(event){
        var clickedComponent = event.target;
        var inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if(!inside){
            this.players = null;
            this.query = '';
        }
    }

    profile(username:string){
        if(this.redirect) this.router.navigate(['/profile', username]);
        else {
            this.players = null;
            this.usersearch.emit(username)
        };
    }
}