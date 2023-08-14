// ========================== redux ===========================
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ========================== actions ===========================
import { fetchEmailVerifyCode, fetchGetVerifyCode } from "./verify.actions";

type VerifyErrorPayload = {
  message: string;
};

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

const initialState = {
  emailVerifyCode: null,
  getVerifyCode: null,
  errors: {
    emailVerifyCode: null,
    getVerifyCode: null,
  },
  pending: {
    emailVerifyCode: false,
    getVerifyCode: false,
  },
} as IInitialState;

const verifySlice = createSlice<IInitialState, any, any>({
  name: "verify",
  initialState: initialState,
  reducers: {
    clearErrors: (state: IInitialState) => {
      state.errors.emailVerifyCode = null;
      state.errors.getVerifyCode = null;
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(fetchEmailVerifyCode.pending, (state: IInitialState) => {
        state.pending.emailVerifyCode = true;
        state.errors.emailVerifyCode = null;
      })
      .addCase(
        fetchEmailVerifyCode.fulfilled,
        (state: IInitialState, action: PayloadAction<{ code: string }>) => {
          state.emailVerifyCode = action.payload;
          state.pending.emailVerifyCode = true;
          state.errors.emailVerifyCode = null;
        }
      )
      .addCase(
        fetchEmailVerifyCode.rejected,
        (state: IInitialState, action: PayloadAction<VerifyErrorPayload>) => {
          state.pending.emailVerifyCode = false;
          state.emailVerifyCode = null;
          state.errors.emailVerifyCode = action.payload.message;
        }
      );

    builder
      .addCase(fetchGetVerifyCode.pending, (state: IInitialState) => {
        state.pending.getVerifyCode = true;
        state.errors.getVerifyCode = null;
      })
      .addCase(
        fetchGetVerifyCode.fulfilled,
        (state: IInitialState, action: PayloadAction<{ response: boolean }>) => {
          state.getVerifyCode = action.payload;
          state.pending.getVerifyCode = true;
          state.errors.getVerifyCode = null;
        }
      )
      .addCase(
        fetchGetVerifyCode.rejected,
        (state: IInitialState, action: PayloadAction<VerifyErrorPayload>) => {
          state.pending.getVerifyCode = false;
          state.getVerifyCode = null;
          state.errors.getVerifyCode = action.payload.message;
        }
      )
      .addDefaultCase(() => {});
  },
});

const { reducer } = verifySlice;
export default reducer;
export const { clearErrors } = verifySlice.actions;
export { fetchEmailVerifyCode, fetchGetVerifyCode };
