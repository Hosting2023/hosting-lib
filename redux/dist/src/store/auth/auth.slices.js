"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchSignInWithFacebook = exports.fetchSignInWithGoogle = exports.logout = exports.fetchCheckAuth = exports.fetchSignUp = exports.fetchSignIn = exports.login = exports.clearErrors = void 0;
// ========================== redux ===========================
var toolkit_1 = require("@reduxjs/toolkit");
// ========================== actions ===========================
var auth_actions_1 = require("./auth.actions");
Object.defineProperty(exports, "fetchCheckAuth", { enumerable: true, get: function () { return auth_actions_1.fetchCheckAuth; } });
Object.defineProperty(exports, "fetchSignIn", { enumerable: true, get: function () { return auth_actions_1.fetchSignIn; } });
Object.defineProperty(exports, "fetchSignInWithFacebook", { enumerable: true, get: function () { return auth_actions_1.fetchSignInWithFacebook; } });
Object.defineProperty(exports, "fetchSignInWithGoogle", { enumerable: true, get: function () { return auth_actions_1.fetchSignInWithGoogle; } });
Object.defineProperty(exports, "fetchSignUp", { enumerable: true, get: function () { return auth_actions_1.fetchSignUp; } });
Object.defineProperty(exports, "logout", { enumerable: true, get: function () { return auth_actions_1.logout; } });
// ========================== consts ===========================
var statuses_enum_1 = require("../../utils/enum/statuses.enum");
var initialState = {
    isAuth: false,
    errors: {
        isAuth: null,
    },
    pending: {
        isAuth: false,
    },
};
var authSlice = (0, toolkit_1.createSlice)({
    name: "auth",
    initialState: initialState,
    reducers: {
        clearErrors: function (state) {
            state.errors.isAuth = null;
        },
        login: function (state) {
            state.isAuth = true;
        },
    },
    extraReducers: function (builder) {
        builder
            .addCase(auth_actions_1.fetchCheckAuth.pending, function (state) {
            state.pending.isAuth = true;
            state.errors.isAuth = null;
        })
            .addCase(auth_actions_1.fetchCheckAuth.fulfilled, function (state, action) {
            state.pending.isAuth = true;
            action.payload.status === statuses_enum_1.Status.Authenticated
                ? (state.isAuth = true)
                : (state.isAuth = false);
        })
            .addCase(auth_actions_1.fetchCheckAuth.rejected, function (state, action) {
            state.pending.isAuth = false;
            state.isAuth = false;
            state.errors.isAuth = action.payload.message;
        });
        builder
            .addCase(auth_actions_1.logout.pending, function (state) {
            state.pending.isAuth = false;
            state.errors.isAuth = null;
        })
            .addCase(auth_actions_1.logout.fulfilled, function (state) {
            state.pending.isAuth = true;
            state.isAuth = false;
        })
            .addCase(auth_actions_1.logout.rejected, function (state, action) {
            state.pending.isAuth = false;
            state.isAuth = false;
            state.errors.isAuth = action.payload;
        })
            .addDefaultCase(function () { });
    },
});
var reducer = authSlice.reducer;
exports.default = reducer;
exports.clearErrors = (_a = authSlice.actions, _a.clearErrors), exports.login = _a.login;
