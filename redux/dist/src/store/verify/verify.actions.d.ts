import { IEmailVerifyCodeRequest, IEmailVerifyCodeResponse } from "../../utils/types/interfaces/email-verify-code.interface";
import { IVerifyCodeResponse, IVerifyCodeRequest } from "../../utils/types/interfaces/get-verify-code.interface";
export declare const fetchEmailVerifyCode: import("@reduxjs/toolkit").AsyncThunk<IEmailVerifyCodeResponse, IEmailVerifyCodeRequest, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchGetVerifyCode: import("@reduxjs/toolkit").AsyncThunk<IVerifyCodeResponse, IVerifyCodeRequest, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
