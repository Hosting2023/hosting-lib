// ========================== store ===========================
import { RootState } from "../store";

export const selectWorkerInfo = (state: RootState) => state.worker.workerInfo;

export const selectOrderCreationStatus = (state: RootState) => state.worker.orderCreationStatus;

export const selectGetWorkerError = (state: RootState) => state.worker.errors.getWorker;

export const selectCreateOrderError = (state: RootState) => state.worker.errors.createOrder;

export const selectIsGettingWorkerPending = (state: RootState) => state.worker.pending.getWorker;

export const selectIsCreatingOrderPending = (state: RootState) => state.worker.pending.createOrder;
