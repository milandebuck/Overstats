import { Component ,OnInit} from '@angular/core';

import { PlayerService} from './../../services'
import {LoadingPage} from "../loading-indicator/loading-indicator";

@Component({
    selector: 'ranking',
    template: require('./content/ranking.component.html'),
    styles: [ require('./content/ranking.component.css') ]
})
export class RankingComponent extends LoadingPage implements OnInit {

    public barChartData: Array<any>;
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                display:false
            }],
            yAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                display:false
            }]
        }
    };
    public chartColors: Array<any> = [
        {   //color
            backgroundColor: '#588c01',
            borderColor: '#588c01',
            pointBackgroundColor: 'rgba(225,10,24,0.2)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(225,10,24,0.2)'
        }
    ];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = false;
    public barChartLabels:string[]=[];
    constructor(private  playerService : PlayerService){
        super(true);
    }

    ngOnInit(){
        this.standby();
        let i = 0;
        while(i < 5000){
            i+=50;
            this.barChartLabels.push(i + ' - ' + (i+50) + ' SR');
        }


        this.playerService.ranking().subscribe((res) => {
                this.barChartData=[{
                    label:"Count",
                    data:res
                }];
                this.ready();
        });
    }

}