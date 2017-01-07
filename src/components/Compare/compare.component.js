"use strict";
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
var router_1 = require("@angular/router");
var CompareComponent = (function () {
    function CompareComponent(playerService, route) {
        this.playerService = playerService;
        this.route = route;
        this.items = [{}, {}];
    }
    CompareComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['username']) {
                _this.playerService.getPlayer(params['username']).subscribe(function (res) {
                    _this.hero1 = res;
                });
            }
        });
    };
    CompareComponent.prototype.searchhero1 = function (username) {
        var _this = this;
        this.playerService.getPlayer(username).subscribe(function (res) {
            _this.hero1 = res;
            console.log('hero1');
            console.log(res);
            if (_this.hero2) {
                _this.compare();
            }
        });
    };
    CompareComponent.prototype.searchhero2 = function (username) {
        var _this = this;
        this.playerService.getPlayer(username).subscribe(function (res) {
            _this.hero2 = res;
            console.log('hero2');
            console.log(res);
            if (_this.hero1)
                _this.compare();
        });
    };
    CompareComponent.prototype.compare = function () {
        var h1 = this.hero1;
        var h2 = this.hero2;
        console.log(h1);
        console.log(h2);
        this.items = [
            { tag: "Eliminations", hero1: h1.stats['Eliminations-Average'], hero2: h2.stats['Eliminations-Average'] },
            { tag: "Solo Kills", hero1: h1.stats['SoloKills-Average'], hero2: h2.stats['SoloKills-Average'] },
            {
                tag: "K/D Ratio",
                hero1: Math.round(parseFloat(h1.stats['Eliminations']) / parseFloat(h1.stats['Deaths']) * 100) / 100,
                hero2: Math.round(parseFloat(h2.stats['Eliminations']) / parseFloat(h2.stats['Deaths']) * 100) / 100 },
            { tag: "Deaths", hero1: h1.stats['Deaths'], hero2: h2.stats['Deaths'] },
            { tag: "Damage Done", hero1: h1.stats['DamageDone-Average'], hero2: h2.stats['DamageDone-Average'] },
            { tag: "Healing Done", hero1: h1.stats['HealingDone-Average'], hero2: h2.stats['HealingDone-Average'] },
            { tag: "Final Blows", hero1: h1.stats['FinalBlows-Average'], hero2: h2.stats['FinalBlows-Average'] },
            { tag: "Objective kills", hero1: h1.stats['ObjectiveKills-Average'], hero2: h2.stats['ObjectiveKills-Average'] },
            { tag: "Objective time", hero1: h1.stats['ObjectiveTime-Average'], hero2: h2.stats['ObjectiveTime-Average'] },
        ];
        console.log("items");
        console.log(this.items);
    };
    CompareComponent = __decorate([
        core_1.Component({
            selector: 'compare',
            template: require('./content/compare.component.html'),
            styles: [require('./content/compare.component.css')]
        }), 
        __metadata('design:paramtypes', [services_1.PlayerService, router_1.ActivatedRoute])
    ], CompareComponent);
    return CompareComponent;
}());
exports.CompareComponent = CompareComponent;
//# sourceMappingURL=compare.component.js.map