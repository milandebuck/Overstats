import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'home',
    template: require('./content/home.component.html'),
    styles: [ require('./content/home.component.css') ]
})
export class HomeComponent{

    constructor(){}

}