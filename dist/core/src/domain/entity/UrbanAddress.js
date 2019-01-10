"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseAddress_1 = require("./BaseAddress");
var UrbanAddress = /** @class */ (function (_super) {
    __extends(UrbanAddress, _super);
    function UrbanAddress() {
        var _this = _super.call(this, 'urban') || this;
        _this.streetName = "";
        _this.streetNumber = 0;
        _this.TownName = "";
        _this.postalCode = 0;
        return _this;
    }
    return UrbanAddress;
}(BaseAddress_1.BaseAddress));
exports.UrbanAddress = UrbanAddress;
//# sourceMappingURL=UrbanAddress.js.map