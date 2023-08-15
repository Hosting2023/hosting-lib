import { RootState } from "../store";
export declare const EmailVerifyCodeSelector: (state: RootState) => {
    code: string;
} | null;
export declare const EmailVerifyCodeErrorSelector: (state: RootState) => string | null;
export declare const EmailVerifyCodePendingSelector: (state: RootState) => boolean;
export declare const GetVerifyCodeSelector: (state: RootState) => {
    response: boolean;
} | null;
export declare const GetVerifyCodeErrorSelector: (state: RootState) => string | null;
export declare const GetVerifyCodePendingSelector: (state: RootState) => boolean;
