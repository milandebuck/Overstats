import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import '../rxjs-operators';


@Component({
    selector: 'portfolio',
    template: require('./content/portfolio.component.html'),
    styles: [ require('./content/portfolio.component.css') ]
})
export class PortfolioComponent{

}