"use strict";
var input = (function () {
    function input(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.key = options.key || "";
        this.label = options.label || "";
        this.required = !!options.required;
        this.type = options.type || "";
        this.desc = options.desc || "";
    }
    return input;
}());
exports.input = input;
//# sourceMappingURL=input.model.js.map