"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderPending = exports.CreateOrderErrors = exports.CreateOrder = exports.GetWorkerPendingInfo = exports.GetWorkerErrorInfo = exports.GetWorkerInfo = void 0;
var GetWorkerInfo = function (state) { return state.worker.workerInfo; };
exports.GetWorkerInfo = GetWorkerInfo;
var GetWorkerErrorInfo = function (state) { return state.worker.errors.workerInfo; };
exports.GetWorkerErrorInfo = GetWorkerErrorInfo;
var GetWorkerPendingInfo = function (state) { return state.worker.pending.workerInfo; };
exports.GetWorkerPendingInfo = GetWorkerPendingInfo;
var CreateOrder = function (state) { return state.worker.createOrder; };
exports.CreateOrder = CreateOrder;
var CreateOrderErrors = function (state) { return state.worker.errors.createOrder; };
exports.CreateOrderErrors = CreateOrderErrors;
var CreateOrderPending = function (state) { return state.worker.pending.createOrder; };
exports.CreateOrderPending = CreateOrderPending;