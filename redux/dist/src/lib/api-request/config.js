"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_CONFIG = exports.configureAPI = void 0;
var api_methods_enum_1 = require("../enum/api-methods.enum");
var API_CONFIG = {
    baseURL: "http://localhost:8080/",
    headers: {
        Accept: "application.json",
        "Content-type": api_methods_enum_1.ContentType.applicationJSON,
    },
};
exports.API_CONFIG = API_CONFIG;
function configureAPI(config) {
    exports.API_CONFIG = API_CONFIG = __assign(__assign({}, API_CONFIG), config);
}
exports.configureAPI = configureAPI;
