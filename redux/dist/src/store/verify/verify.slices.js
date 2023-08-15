"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchGetVerifyCode = exports.fetchEmailVerifyCode = exports.clearErrors = void 0;
// ========================== redux ===========================
var toolkit_1 = require("@reduxjs/toolkit");
// ========================== actions ===========================
var verify_actions_1 = require("./verify.actions");
Object.defineProperty(exports, "fetchEmailVerifyCode", { enumerable: true, get: function () { return verify_actions_1.fetchEmailVerifyCode; } });
Object.defineProperty(exports, "fetchGetVerifyCode", { enumerable: true, get: function () { return verify_actions_1.fetchGetVerifyCode; } });
var initialState = {
    emailVerifyCode: null,
    getVerifyCode: null,
    errors: {
        emailVerifyCode: null,
        getVerifyCode: null,
    },
    pending: {
        emailVerifyCode: false,
        getVerifyCode: false,
    },
};
var verifySlice = (0, toolkit_1.createSlice)({
    name: "verify",
    initialState: initialState,
    reducers: {
        clearErrors: function (state) {
            state.errors.emailVerifyCode = null;
            state.errors.getVerifyCode = null;
        },
    },
    extraReducers: function (builder) {
        builder
            .addCase(verify_actions_1.fetchEmailVerifyCode.pending, function (state) {
            state.pending.emailVerifyCode = true;
            state.errors.emailVerifyCode = null;
        })
            .addCase(verify_actions_1.fetchEmailVerifyCode.fulfilled, function (state, action) {
            state.emailVerifyCode = action.payload;
            state.pending.emailVerifyCode = true;
            state.errors.emailVerifyCode = null;
        })
            .addCase(verify_actions_1.fetchEmailVerifyCode.rejected, function (state, action) {
            state.pending.emailVerifyCode = false;
            state.emailVerifyCode = null;
            state.errors.emailVerifyCode = action.payload.message;
        });
        builder
            .addCase(verify_actions_1.fetchGetVerifyCode.pending, function (state) {
            state.pending.getVerifyCode = true;
            state.errors.getVerifyCode = null;
        })
            .addCase(verify_actions_1.fetchGetVerifyCode.fulfilled, function (state, action) {
            state.getVerifyCode = action.payload;
            state.pending.getVerifyCode = true;
            state.errors.getVerifyCode = null;
        })
            .addCase(verify_actions_1.fetchGetVerifyCode.rejected, function (state, action) {
            state.pending.getVerifyCode = false;
            state.getVerifyCode = null;
            state.errors.getVerifyCode = action.payload.message;
        })
            .addDefaultCase(function () { });
    },
});
var reducer = verifySlice.reducer;
exports.default = reducer;
exports.clearErrors = verifySlice.actions.clearErrors;
