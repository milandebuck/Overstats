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
var angular2_infinite_scroll_1 = require('angular2-infinite-scroll');
var services_1 = require('./../../services');
var router_1 = require("@angular/router");
var LeaderboardComponent = (function () {
    function LeaderboardComponent(playerService, router) {
        this.playerService = playerService;
        this.router = router;
        this.start = 0;
        this.end = 20;
        this.loading = false;
    }
    LeaderboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playerService.getTop(this.start, this.end).subscribe(function (res) {
            _this.players = res;
        });
    };
    LeaderboardComponent.prototype.onScroll = function () {
        var _this = this;
        this.loading = true;
        this.start += 20;
        this.end += 20;
        this.playerService.getTop(this.start, this.end).subscribe(function (res) {
            res.map(function (player) { return _this.players.push(player); });
        });
    };
    LeaderboardComponent.prototype.toProfile = function (username) {
        this.router.navigate(['/profile', username]);
    };
    LeaderboardComponent = __decorate([
        core_1.Component({
            selector: 'leaderboard',
            directives: [angular2_infinite_scroll_1.InfiniteScroll],
            template: require('./content/leaderboard.component.html'),
            styles: [require('./content/leaderboard.component.css')]
        }), 
        __metadata('design:paramtypes', [services_1.PlayerService, router_1.Router])
    ], LeaderboardComponent);
    return LeaderboardComponent;
}());
exports.LeaderboardComponent = LeaderboardComponent;
//# sourceMappingURL=leaderboard.component.js.map