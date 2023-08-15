import { RootState } from "../store";
export declare const GetWorkerInfo: (state: RootState) => import("../../utils/types/interfaces/get-worker.interface").IGetWorkerResponse | null;
export declare const GetWorkerErrorInfo: (state: RootState) => string | null;
export declare const GetWorkerPendingInfo: (state: RootState) => boolean;
export declare const CreateOrder: (state: RootState) => import("../../utils/enum/statuses.enum").Status | null;
export declare const CreateOrderErrors: (state: RootState) => string | null;
export declare const CreateOrderPending: (state: RootState) => boolean;
