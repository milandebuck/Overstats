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
var InputControl = (function () {
    function InputControl() {
    }
    InputControl.prototype.toFormgroup = function (inputs) {
        var group = {};
        inputs.map(function (i) {
            group[i.key] = i.required ? new forms_1.FormControl(i.value || '', forms_1.Validators.required) : new forms_1.FormControl(i.value || '');
        });
        return new forms_1.FormGroup(group);
    };
    InputControl = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], InputControl);
    return InputControl;
}());
exports.InputControl = InputControl;
//# sourceMappingURL=input-control.service.js.map