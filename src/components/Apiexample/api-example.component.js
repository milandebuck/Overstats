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
var input_control_service_1 = require('./../../services/input-control.service');
var api_service_1 = require("../../services/api.service");
var ApiexampleComponent = (function () {
    function ApiexampleComponent(ic, api) {
        this.ic = ic;
        this.api = api;
        this.params = [];
    }
    ApiexampleComponent.prototype.ngOnInit = function () {
        this.params = this.apimodel.params;
        this.form = this.ic.toFormgroup(this.params);
    };
    ApiexampleComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.apimodel.httptype === 'post') {
            this.api.post(this.apiurl + this.apimodel.url, this.form.value).subscribe(function (res) { return _this.result = _this.processResult(res); });
            console.log(this.form.value);
        }
        else if (this.apimodel.httptype === 'get') {
            this.api.get(this.apiurl + this.apimodel.url, this.form.value).subscribe(function (res) { return _this.result = _this.processResult(res); });
            console.log(this.form.value);
        }
    };
    ApiexampleComponent.prototype.processResult = function (res) {
        return JSON.parse(JSON.stringify(res.json())
            .replace(',', ',\n')
            .replace('{', '{\n')
            .replace('}', '}\n'));
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ApiexampleComponent.prototype, "apimodel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ApiexampleComponent.prototype, "apiurl", void 0);
    ApiexampleComponent = __decorate([
        core_1.Component({
            selector: 'api-example',
            template: require('./content/api-example.component.html'),
            styles: [require('./content/api-example.component.css')],
        }), 
        __metadata('design:paramtypes', [input_control_service_1.InputControl, api_service_1.ApiService])
    ], ApiexampleComponent);
    return ApiexampleComponent;
}());
exports.ApiexampleComponent = ApiexampleComponent;
//# sourceMappingURL=api-example.component.js.map