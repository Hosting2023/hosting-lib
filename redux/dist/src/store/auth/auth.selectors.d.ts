import { RootState } from "../store";
export declare const AuthSelector: (state: RootState) => boolean;
export declare const AuthErrorSelector: (state: RootState) => {
    isAuth: string | null;
};
export declare const AuthPendingSelector: (state: RootState) => {
    isAuth: boolean;
};
