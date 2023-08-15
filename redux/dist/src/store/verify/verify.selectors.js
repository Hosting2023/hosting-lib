"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetVerifyCodePendingSelector = exports.GetVerifyCodeErrorSelector = exports.GetVerifyCodeSelector = exports.EmailVerifyCodePendingSelector = exports.EmailVerifyCodeErrorSelector = exports.EmailVerifyCodeSelector = void 0;
var EmailVerifyCodeSelector = function (state) { return state.verify.emailVerifyCode; };
exports.EmailVerifyCodeSelector = EmailVerifyCodeSelector;
var EmailVerifyCodeErrorSelector = function (state) {
    return state.verify.errors.emailVerifyCode;
};
exports.EmailVerifyCodeErrorSelector = EmailVerifyCodeErrorSelector;
var EmailVerifyCodePendingSelector = function (state) {
    return state.verify.pending.emailVerifyCode;
};
exports.EmailVerifyCodePendingSelector = EmailVerifyCodePendingSelector;
var GetVerifyCodeSelector = function (state) { return state.verify.getVerifyCode; };
exports.GetVerifyCodeSelector = GetVerifyCodeSelector;
var GetVerifyCodeErrorSelector = function (state) { return state.verify.errors.getVerifyCode; };
exports.GetVerifyCodeErrorSelector = GetVerifyCodeErrorSelector;
var GetVerifyCodePendingSelector = function (state) {
    return state.verify.pending.getVerifyCode;
};
exports.GetVerifyCodePendingSelector = GetVerifyCodePendingSelector;
