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
var forms_1 = require('@angular/forms');
var input_model_1 = require('./../../models/input.model');
var ParamInputComponent = (function () {
    function ParamInputComponent() {
    }
    Object.defineProperty(ParamInputComponent.prototype, "isValid", {
        get: function () {
            return this.form.controls[this.param.key].valid;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', input_model_1.input)
    ], ParamInputComponent.prototype, "param", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroup)
    ], ParamInputComponent.prototype, "form", void 0);
    ParamInputComponent = __decorate([
        core_1.Component({
            selector: 'param-input',
            template: require('./content/param-input.component.html'),
            styles: [require('./content/param-input.component.css')]
        }), 
        __metadata('design:paramtypes', [])
    ], ParamInputComponent);
    return ParamInputComponent;
}());
exports.ParamInputComponent = ParamInputComponent;
//# sourceMappingURL=param-input.component.js.map