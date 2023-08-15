"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchCreateOrder = exports.fetchGetWorkerInfo = exports.clearErrors = void 0;
// ========================== redux ===========================
var toolkit_1 = require("@reduxjs/toolkit");
// ========================== actions ===========================
var worker_actions_1 = require("./worker.actions");
Object.defineProperty(exports, "fetchGetWorkerInfo", { enumerable: true, get: function () { return worker_actions_1.fetchGetWorkerInfo; } });
Object.defineProperty(exports, "fetchCreateOrder", { enumerable: true, get: function () { return worker_actions_1.fetchCreateOrder; } });
var initialState = {
    workerInfo: null,
    createOrder: null,
    errors: {
        workerInfo: null,
        createOrder: null,
    },
    pending: {
        workerInfo: false,
        createOrder: false,
    },
};
var workerSlice = (0, toolkit_1.createSlice)({
    name: "worker",
    initialState: initialState,
    reducers: {
        clearErrors: function (state) {
            state.errors.workerInfo = null;
            state.errors.createOrder = null;
        },
    },
    extraReducers: function (builder) {
        builder
            .addCase(worker_actions_1.fetchGetWorkerInfo.pending, function (state) {
            state.pending.workerInfo = true;
            state.errors.workerInfo = null;
        })
            .addCase(worker_actions_1.fetchGetWorkerInfo.fulfilled, function (state, action) {
            state.pending.workerInfo = false;
            state.workerInfo = action.payload;
        })
            .addCase(worker_actions_1.fetchGetWorkerInfo.rejected, function (state, action) {
            state.pending.workerInfo = false;
            state.errors.workerInfo = action.payload;
        });
        builder
            .addCase(worker_actions_1.fetchCreateOrder.pending, function (state) {
            state.pending.createOrder = true;
            state.errors.createOrder = null;
        })
            .addCase(worker_actions_1.fetchCreateOrder.fulfilled, function (state, action) {
            state.pending.createOrder = false;
            state.createOrder = action.payload.response;
        })
            .addCase(worker_actions_1.fetchCreateOrder.rejected, function (state, action) {
            state.pending.createOrder = false;
            state.errors.createOrder = action.payload;
        });
    },
});
var reducer = workerSlice.reducer;
exports.default = reducer;
exports.clearErrors = workerSlice.actions.clearErrors;
