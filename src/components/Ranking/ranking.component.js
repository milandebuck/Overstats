"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var services_1 = require('./../../services');
var loading_indicator_1 = require("../loading-indicator/loading-indicator");
var RankingComponent = (function (_super) {
    __extends(RankingComponent, _super);
    function RankingComponent(playerService) {
        _super.call(this, true);
        this.playerService = playerService;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        },
                        display: false
                    }],
                yAxes: [{
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        },
                        display: false
                    }]
            }
        };
        this.chartColors = [
            {
                backgroundColor: '#588c01',
                borderColor: '#588c01',
                pointBackgroundColor: 'rgba(225,10,24,0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(225,10,24,0.2)'
            }
        ];
        this.barChartType = 'bar';
        this.barChartLegend = false;
        this.barChartLabels = [];
    }
    RankingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.standby();
        var i = 0;
        while (i < 5000) {
            i += 50;
            this.barChartLabels.push(i + ' - ' + (i + 50) + ' SR');
        }
        this.playerService.ranking().subscribe(function (res) {
            _this.barChartData = [{
                    label: "Count",
                    data: res
                }];
            _this.ready();
        });
    };
    RankingComponent = __decorate([
        core_1.Component({
            selector: 'ranking',
            template: require('./content/ranking.component.html'),
            styles: [require('./content/ranking.component.css')]
        }), 
        __metadata('design:paramtypes', [services_1.PlayerService])
    ], RankingComponent);
    return RankingComponent;
}(loading_indicator_1.LoadingPage));
exports.RankingComponent = RankingComponent;
//# sourceMappingURL=ranking.component.js.map