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
var router_1 = require('@angular/router');
require('../rxjs-operators');
var cookie_service_1 = require("../../services/cookie.service");
var api_service_1 = require("../../services/api.service");
var AppComponent = (function () {
    function AppComponent(router, cs, api) {
        this.router = router;
        this.cs = cs;
        this.api = api;
        this.apiurl = 'https://api-overstats.herokuapp.com/Api';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.cs.getCookie('x-access-token')) {
            this.api.post(this.apiurl + '/Authenticate', { username: 'overstats', password: 'Azerty123' }).subscribe(function (res) { return _this.cs.setCookie(res.json().token); });
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: require('./content/app.component.html'),
            styles: [require('./content/app.component.css')]
        }), 
        __metadata('design:paramtypes', [router_1.Router, cookie_service_1.CookieService, api_service_1.ApiService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map