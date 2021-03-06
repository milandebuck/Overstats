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
var router_1 = require('@angular/router');
var services_1 = require('./../../services');
var loading_indicator_1 = require("../loading-indicator/loading-indicator");
var ProfileComponent = (function (_super) {
    __extends(ProfileComponent, _super);
    function ProfileComponent(playerService, route, router) {
        _super.call(this, true);
        this.playerService = playerService;
        this.route = route;
        this.router = router;
        this.player = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.standby();
        this.route.params.subscribe(function (params) {
            if (params['username'] !== null) {
                _this.username = params['username'];
                _this.standby();
                console.log("route changed");
                _this.playerService.getPlayer(params['username']).subscribe(function (res) {
                    console.log('got player');
                    _this.player = res;
                    _this.kd = Math.round((_this.player.stats['Eliminations'] / _this.player.stats['Deaths']) * 100) / 100;
                    _this.ready();
                });
            }
        });
    };
    ProfileComponent.prototype.compareTo = function () {
        this.router.navigate(['compare', this.username]);
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'profile',
            template: require('./content/profile.component.html'),
            styles: [require('./content/profile.component.css')]
        }), 
        __metadata('design:paramtypes', [services_1.PlayerService, router_1.ActivatedRoute, router_1.Router])
    ], ProfileComponent);
    return ProfileComponent;
}(loading_indicator_1.LoadingPage));
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map