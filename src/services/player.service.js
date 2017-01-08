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
var http_1 = require('@angular/http');
var extract_service_1 = require('./extract.service');
var cookie_service_1 = require("./cookie.service");
var PlayerService = (function () {
    function PlayerService(http, extractService, cs) {
        this.http = http;
        this.extractService = extractService;
        this.cs = cs;
        this.apiUrl = "https://api-overstats.herokuapp.com/Api";
    }
    PlayerService.prototype.getTop = function (start, end) {
        //fix at the end of the playerbase
        if (start > 3180 || end > 3206)
            return null;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token', this.cs.getCookie('x-access-token'));
        //routeparams
        var params = new http_1.URLSearchParams();
        //options
        var options = new http_1.RequestOptions({
            headers: headers,
            search: params
        });
        return this.http
            .get(this.apiUrl + '/Ladder/Top/' + start + '/' + end, options)
            .map(this.extractService.extractData)
            .catch(this.extractService.handleError);
    };
    PlayerService.prototype.search = function (query) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token', this.cs.getCookie('x-access-token'));
        //routeparams
        var params = new http_1.URLSearchParams();
        //options
        var options = new http_1.RequestOptions({
            headers: headers,
            search: params
        });
        return this.http
            .get(this.apiUrl + '/Players/' + query, options)
            .map(this.extractService.extractData)
            .catch(this.extractService.handleError);
    };
    PlayerService.prototype.ranking = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token', this.cs.getCookie('x-access-token'));
        //routeparams
        var params = new http_1.URLSearchParams();
        //options
        var options = new http_1.RequestOptions({
            headers: headers,
            search: params
        });
        return this.http
            .get(this.apiUrl + '/Ladder/Distribution', options)
            .map(this.extractService.extractData)
            .catch(this.extractService.handleError);
    };
    PlayerService.prototype.getPlayer = function (player) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token', this.cs.getCookie('x-access-token'));
        //routeparams
        var params = new http_1.URLSearchParams();
        //options
        var options = new http_1.RequestOptions({
            headers: headers,
            search: params
        });
        return this.http
            .get(this.apiUrl + '/Players/User/' + player, options)
            .map(this.extractService.extractData)
            .catch(this.extractService.handleError);
    };
    PlayerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, extract_service_1.ExtractService, cookie_service_1.CookieService])
    ], PlayerService);
    return PlayerService;
}());
exports.PlayerService = PlayerService;
//# sourceMappingURL=player.service.js.map