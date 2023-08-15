import { fetchGetWorkerInfo, fetchCreateOrder } from "./worker.actions";
import { Status } from "../../utils/enum/statuses.enum";
import { IGetWorkerResponse } from "../../utils/types/interfaces/get-worker.interface";
type IInitialState = {
    workerInfo: IGetWorkerResponse | null;
    createOrder: Status | null;
    errors: {
        workerInfo: string | null;
        createOrder: string | null;
    };
    pending: {
        workerInfo: boolean;
        createOrder: boolean;
    };
};
declare const reducer: import("redux").Reducer<IInitialState>;
export default reducer;
export declare const clearErrors: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"worker/clearErrors">;
export { fetchGetWorkerInfo, fetchCreateOrder };
