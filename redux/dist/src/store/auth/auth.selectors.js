"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthPendingSelector = exports.AuthErrorSelector = exports.AuthSelector = void 0;
var AuthSelector = function (state) { return state.auth.isAuth; };
exports.AuthSelector = AuthSelector;
var AuthErrorSelector = function (state) { return state.auth.errors; };
exports.AuthErrorSelector = AuthErrorSelector;
var AuthPendingSelector = function (state) { return state.auth.pending; };
exports.AuthPendingSelector = AuthPendingSelector;
