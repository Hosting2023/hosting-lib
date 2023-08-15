import { IGetWorkerRequest, IGetWorkerResponse } from "../../utils/types/interfaces/get-worker.interface";
import { ICreateOrderRequest, ICreateOrderResponse } from "../../utils/types/interfaces/create-order";
export declare const fetchGetWorkerInfo: import("@reduxjs/toolkit").AsyncThunk<IGetWorkerResponse, IGetWorkerRequest, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchCreateOrder: import("@reduxjs/toolkit").AsyncThunk<ICreateOrderResponse, ICreateOrderRequest, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
