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
var models_1 = require('./../../models');
var input_control_service_1 = require("../../services/input-control.service");
var api_service_1 = require("../../services/api.service");
var ApiComponent = (function () {
    function ApiComponent(ic, apiservice) {
        this.ic = ic;
        this.apiservice = apiservice;
        this.api = 'http://localhost:8080/Api';
    }
    ApiComponent.prototype.ngOnInit = function () {
        this.registerInput = [
            new models_1.textinput({
                key: 'username',
                label: 'Username',
                type: 'text',
                required: true,
            }),
            new models_1.textinput({
                key: 'password',
                label: 'Your password',
                type: 'password',
                required: true,
            }),
            new models_1.textinput({
                key: 'confirmpass',
                label: 'Confirm password',
                type: 'password',
                required: true,
            })
        ];
        this.register = this.ic.toFormgroup(this.registerInput);
        var apiroutes = [
            {
                url: '/Authenticate',
                urlexample: '/Authenticate',
                name: 'Authenticate',
                desc: 'This will give you an acces token so you can acces the api',
                httptype: 'post',
                params: [
                    new models_1.textinput({
                        key: 'username',
                        label: 'Your username',
                        type: 'text',
                        desc: 'The username you registered with',
                        required: true,
                    }),
                    new models_1.textinput({
                        key: 'password',
                        label: 'Your password',
                        type: 'password',
                        desc: 'Your password',
                        required: true,
                    })
                ],
            },
            {
                url: '/Players/All',
                urlexample: '/PLayers/All',
                name: 'Get all Players',
                desc: 'Returns a list with all players',
                httptype: 'get',
                params: [
                    new models_1.textinput({
                        key: 'x-access-token',
                        label: 'x-access-token(header)',
                        type: 'text',
                        desc: 'Token for authentication needs to be in the header of your request',
                        required: true,
                    }),
                ],
            },
            {
                url: '/Players/User',
                urlexample: '/Players/User/{username}',
                name: 'Get a player',
                desc: 'Returns a player with stats and herodetails',
                httptype: 'get',
                params: [
                    new models_1.textinput({
                        key: 'username',
                        label: 'The username of the player',
                        type: 'text',
                        desc: 'The username of the player you want to request(battletag)',
                        required: true,
                    }),
                    new models_1.textinput({
                        key: 'x-access-token',
                        label: 'x-access-token',
                        type: 'text',
                        desc: 'Token for authentication needs to be in the header of your request',
                        required: true,
                    }),
                ],
            },
            {
                url: '/Players',
                urlexample: '/Players/{query}',
                name: 'Query users',
                desc: 'Returns an Array of players where the username of the player contains the given query (limits to 10 players)',
                httptype: 'get',
                params: [
                    new models_1.textinput({
                        key: 'username',
                        label: 'The query',
                        type: 'text',
                        desc: 'The query you want to search for',
                        required: true,
                    }),
                    new models_1.textinput({
                        key: 'x-access-token',
                        label: 'x-access-token(header)',
                        type: 'text',
                        desc: 'Token for authentication needs to be in the header of your request',
                        required: true,
                    }),
                ],
            },
            {
                url: '/Players/User',
                urlexample: '/Players/User/{username}/Stats',
                name: 'Get the stats of a player',
                desc: 'Returns a players statistics',
                httptype: 'get',
                params: [
                    new models_1.textinput({
                        key: 'username',
                        label: 'The username of the player',
                        type: 'text',
                        desc: 'The username of the player you want to request(battletag)',
                        required: true,
                    }),
                    new models_1.textinput({
                        key: 'extra',
                        value: 'Stats',
                        type: 'hidden',
                        required: true,
                    }),
                    new models_1.textinput({
                        key: 'x-access-token',
                        label: 'x-access-token(header)',
                        type: 'text',
                        desc: 'Token for authentication needs to be in the header of your request',
                        required: true,
                    }),
                ],
            },
            {
                url: '/Players/User',
                urlexample: '/Players/User/{username}/Heroes',
                name: 'Get the hero play time of a player',
                desc: 'Returns a array of heroes',
                httptype: 'get',
                params: [
                    new models_1.textinput({
                        key: 'username',
                        label: 'The username of the player',
                        type: 'text',
                        desc: 'The username of the player you want to request(battletag)',
                        required: true,
                    }),
                    new models_1.textinput({
                        key: 'extra',
                        value: 'Heroes',
                        type: 'hidden',
                        required: true,
                    }),
                    new models_1.textinput({
                        key: 'x-access-token',
                        label: 'x-access-token(header)',
                        type: 'text',
                        desc: 'Token for authentication needs to be in the header of your request',
                        required: true,
                    }),
                ],
            },
            {
                url: '/Ladder/Top',
                urlexample: '/Ladder/Top/{start}/{end}',
                name: 'Get a snapshot of the ranking',
                desc: 'Returns a list of players sorted on their place in the ranking',
                httptype: 'get',
                params: [
                    new models_1.textinput({
                        key: 'top',
                        label: 'The start value',
                        type: 'number',
                        desc: 'The highest ranking player you want to get',
                        required: true,
                    }),
                    new models_1.textinput({
                        key: 'endvalue',
                        label: 'The end value',
                        type: 'number',
                        desc: 'The lowest ranking player you want to get',
                        required: true,
                    }),
                    new models_1.textinput({
                        key: 'x-access-token',
                        label: 'x-access-token(header)',
                        type: 'text',
                        desc: 'Token for authentication needs to be in the header of your request',
                        required: true,
                    }),
                ],
            },
            {
                url: '/Ladder/Distribution',
                urlexample: '/Ladder/Distribution',
                name: 'The rank distribution',
                desc: 'Returns the distribution of the players on the ranking ladder each value in the array represents a 50SR-rating range starting from 0 to 5000',
                httptype: 'get',
                params: [
                    new models_1.textinput({
                        key: 'x-access-token',
                        label: 'x-access-token(header)',
                        type: 'text',
                        desc: 'Token for authentication needs to be in the header of your request',
                        required: true,
                    }),
                ],
            },
        ];
        this.routes = apiroutes;
    };
    ApiComponent.prototype.onSubmit = function () {
        var _this = this;
        this.apiservice.post(this.api + '/Register', this.register.value).subscribe(function (res) { return _this.msg = res.json().msg; });
    };
    ApiComponent = __decorate([
        core_1.Component({
            selector: 'api',
            template: require('./content/api.component.html'),
            styles: [require('./content/api.component.css')]
        }), 
        __metadata('design:paramtypes', [input_control_service_1.InputControl, api_service_1.ApiService])
    ], ApiComponent);
    return ApiComponent;
}());
exports.ApiComponent = ApiComponent;
//# sourceMappingURL=api.component.js.map