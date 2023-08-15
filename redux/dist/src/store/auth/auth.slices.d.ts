import { fetchCheckAuth, fetchSignIn, fetchSignInWithFacebook, fetchSignInWithGoogle, fetchSignUp, logout } from "./auth.actions";
type IInitialState = {
    isAuth: boolean;
    errors: {
        isAuth: string | null;
    };
    pending: {
        isAuth: boolean;
    };
};
declare const reducer: import("redux").Reducer<IInitialState>;
export default reducer;
export declare const clearErrors: void | import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<unknown[], unknown, `${any}/${string}`, unknown, unknown> | import("@reduxjs/toolkit").ActionCreatorWithoutPayload<`${any}/${string}`>, login: void | import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<unknown[], unknown, `${any}/${string}`, unknown, unknown> | import("@reduxjs/toolkit").ActionCreatorWithoutPayload<`${any}/${string}`>;
export { fetchSignIn, fetchSignUp, fetchCheckAuth, logout, fetchSignInWithGoogle, fetchSignInWithFacebook, };
