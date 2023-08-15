"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentType = exports.HttpMethod = void 0;
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "get";
    HttpMethod["POST"] = "post";
    HttpMethod["PUT"] = "put";
    HttpMethod["DELETE"] = "delete";
})(HttpMethod || (exports.HttpMethod = HttpMethod = {}));
var ContentType;
(function (ContentType) {
    ContentType["applicationJSON"] = "application/json";
    ContentType["applicationXML"] = "application/xml";
    ContentType["textPlain"] = "text/plain";
    ContentType["textHTML"] = "text/html";
})(ContentType || (exports.ContentType = ContentType = {}));
