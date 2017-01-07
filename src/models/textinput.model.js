"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var input_model_1 = require('./input.model');
var textinput = (function (_super) {
    __extends(textinput, _super);
    function textinput(options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        this.controlType = 'string';
        this.type = options['type'] || 'text';
    }
    return textinput;
}(input_model_1.input));
exports.textinput = textinput;
//# sourceMappingURL=textinput.model.js.map