import { TypedUseSelectorHook } from "react-redux";
declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<{
    auth: {
        isAuth: boolean;
        errors: {
            isAuth: string | null;
        };
        pending: {
            isAuth: boolean;
        };
    };
    verify: {
        emailVerifyCode: {
            code: string;
        } | null;
        getVerifyCode: {
            response: boolean;
        } | null;
        errors: {
            emailVerifyCode: string | null;
            getVerifyCode: string | null;
        };
        pending: {
            emailVerifyCode: boolean;
            getVerifyCode: boolean;
        };
    };
    worker: {
        workerInfo: import("../utils/types/interfaces/get-worker.interface").IGetWorkerResponse | null;
        createOrder: import("../utils/enum/statuses.enum").Status | null;
        errors: {
            workerInfo: string | null;
            createOrder: string | null;
        };
        pending: {
            workerInfo: boolean;
            createOrder: boolean;
        };
    };
}, import("redux").AnyAction, [import("@reduxjs/toolkit").ThunkMiddleware<{
    auth: {
        isAuth: boolean;
        errors: {
            isAuth: string | null;
        };
        pending: {
            isAuth: boolean;
        };
    };
    verify: {
        emailVerifyCode: {
            code: string;
        } | null;
        getVerifyCode: {
            response: boolean;
        } | null;
        errors: {
            emailVerifyCode: string | null;
            getVerifyCode: string | null;
        };
        pending: {
            emailVerifyCode: boolean;
            getVerifyCode: boolean;
        };
    };
    worker: {
        workerInfo: import("../utils/types/interfaces/get-worker.interface").IGetWorkerResponse | null;
        createOrder: import("../utils/enum/statuses.enum").Status | null;
        errors: {
            workerInfo: string | null;
            createOrder: string | null;
        };
        pending: {
            workerInfo: boolean;
            createOrder: boolean;
        };
    };
}, import("redux").AnyAction>]>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export declare const useAppDispatch: () => import("@reduxjs/toolkit").ThunkDispatch<{
    auth: {
        isAuth: boolean;
        errors: {
            isAuth: string | null;
        };
        pending: {
            isAuth: boolean;
        };
    };
    verify: {
        emailVerifyCode: {
            code: string;
        } | null;
        getVerifyCode: {
            response: boolean;
        } | null;
        errors: {
            emailVerifyCode: string | null;
            getVerifyCode: string | null;
        };
        pending: {
            emailVerifyCode: boolean;
            getVerifyCode: boolean;
        };
    };
    worker: {
        workerInfo: import("../utils/types/interfaces/get-worker.interface").IGetWorkerResponse | null;
        createOrder: import("../utils/enum/statuses.enum").Status | null;
        errors: {
            workerInfo: string | null;
            createOrder: string | null;
        };
        pending: {
            workerInfo: boolean;
            createOrder: boolean;
        };
    };
}, undefined, import("redux").AnyAction> & import("redux").Dispatch<import("redux").AnyAction>;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
export default store;
