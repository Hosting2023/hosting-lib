// ========================== store ===========================
import { RootState } from "../store";

export const EmailVerifyCodeSelector = (state: RootState) => state.verify.emailVerifyCode;

export const EmailVerifyCodeErrorSelector = (state: RootState) =>
  state.verify.errors.emailVerifyCode;

export const EmailVerifyCodePendingSelector = (state: RootState) =>
  state.verify.pending.emailVerifyCode;

export const GetVerifyCodeSelector = (state: RootState) => state.verify.getVerifyCode;

export const GetVerifyCodeErrorSelector = (state: RootState) => state.verify.errors.getVerifyCode;

export const GetVerifyCodePendingSelector = (state: RootState) =>
  state.verify.pending.getVerifyCode;
