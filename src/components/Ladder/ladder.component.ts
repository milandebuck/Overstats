import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'home',
    template: require('./content/ladder.component.html'),
    styles: [ require('./content/ladder.component.css') ]
})
export class LadderComponent{

    constructor(){}

}