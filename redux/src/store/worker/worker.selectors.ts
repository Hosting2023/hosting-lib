// ========================== store ===========================
import { RootState } from "../store";

export const GetWorkerInfo = (state: RootState) => state.worker.workerInfo;
export const GetWorkerErrorInfo = (state: RootState) => state.worker.errors.workerInfo;
export const GetWorkerPendingInfo = (state: RootState) => state.worker.pending.workerInfo;

export const CreateOrder = (state: RootState) => state.worker.createOrder;
export const CreateOrderErrors = (state: RootState) => state.worker.errors.createOrder;
export const CreateOrderPending = (state: RootState) => state.worker.pending.createOrder;
