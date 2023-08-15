import { fetchEmailVerifyCode, fetchGetVerifyCode } from "./verify.actions";
type EmailVerifyCode = {
    code: string;
};
type Response = {
    response: boolean;
};
type IInitialState = {
    emailVerifyCode: EmailVerifyCode | null;
    getVerifyCode: Response | null;
    errors: {
        emailVerifyCode: string | null;
        getVerifyCode: string | null;
    };
    pending: {
        emailVerifyCode: boolean;
        getVerifyCode: boolean;
    };
};
declare const reducer: import("redux").Reducer<IInitialState>;
export default reducer;
export declare const clearErrors: void | import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<unknown[], unknown, `${any}/${string}`, unknown, unknown> | import("@reduxjs/toolkit").ActionCreatorWithoutPayload<`${any}/${string}`>;
export { fetchEmailVerifyCode, fetchGetVerifyCode };
