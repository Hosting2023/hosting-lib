"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppSelector = exports.useAppDispatch = exports.store = void 0;
var react_redux_1 = require("react-redux");
var toolkit_1 = require("@reduxjs/toolkit");
// =========================== Slices ===========================
var auth_slices_1 = require("./auth/auth.slices");
var verify_slices_1 = require("./verify/verify.slices");
var worker_slices_1 = require("./worker/worker.slices");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        auth: auth_slices_1.default,
        verify: verify_slices_1.default,
        worker: worker_slices_1.default,
    },
});
var useAppDispatch = function () { return (0, react_redux_1.useDispatch)(); };
exports.useAppDispatch = useAppDispatch;
exports.useAppSelector = react_redux_1.useSelector;
