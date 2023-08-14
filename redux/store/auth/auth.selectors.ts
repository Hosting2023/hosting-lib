// ========================== store ===========================
import { RootState } from "../store";

export const AuthSelector = (state: RootState) => state.auth.isAuth;

export const AuthErrorSelector = (state: RootState) => state.auth.errors;

export const AuthPendingSelector = (state: RootState) => state.auth.pending;
