// ========================== redux ===========================
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ========================== actions ===========================
import {
  fetchCheckAuth,
  fetchSignIn,
  fetchSignInWithFacebook,
  fetchSignInWithGoogle,
  fetchSignUp,
  logout,
} from "./auth.actions";

// ========================== consts ===========================
import { Status } from "../../utils/enum/statuses.enum";

// ========================== types ===========================

type CheckAuthPayload = {
  status: Status.Authenticated | Status.Unauthenticated;
};

type AuthErrorPayload = {
  message: string;
};

type IInitialState = {
  isAuth: boolean;
  errors: {
    isAuth: string | null;
  };
  pending: {
    isAuth: boolean;
  };
};

const initialState = {
  isAuth: false,
  errors: {
    isAuth: null,
  },
  pending: {
    isAuth: false,
  },
} as IInitialState;

const authSlice = createSlice<IInitialState, any, any>({
  name: "auth",
  initialState: initialState,
  reducers: {
    clearErrors: (state: IInitialState) => {
      state.errors.isAuth = null;
    },
    login: (state: IInitialState) => {
      state.isAuth = true;
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(fetchCheckAuth.pending, (state: IInitialState) => {
        state.pending.isAuth = true;
        state.errors.isAuth = null;
      })
      .addCase(
        fetchCheckAuth.fulfilled,
        (state: IInitialState, action: PayloadAction<CheckAuthPayload>) => {
          state.pending.isAuth = true;
          action.payload.status === Status.Authenticated
            ? (state.isAuth = true)
            : (state.isAuth = false);
        }
      )
      .addCase(
        fetchCheckAuth.rejected,
        (state: IInitialState, action: PayloadAction<AuthErrorPayload>) => {
          state.pending.isAuth = false;
          state.isAuth = false;
          state.errors.isAuth = action.payload.message;
        }
      );

    builder
      .addCase(logout.pending, (state: IInitialState) => {
        state.pending.isAuth = false;
        state.errors.isAuth = null;
      })
      .addCase(logout.fulfilled, (state: IInitialState) => {
        state.pending.isAuth = true;
        state.isAuth = false;
      })
      .addCase(logout.rejected, (state: IInitialState, action: any & { payload: any }) => {
        state.pending.isAuth = false;
        state.isAuth = false;
        state.errors.isAuth = action.payload;
      })
      .addDefaultCase(() => {});
  },
});
const { reducer } = authSlice;
export default reducer;
export const { clearErrors, login } = authSlice.actions;
export {
  fetchSignIn,
  fetchSignUp,
  fetchCheckAuth,
  logout,
  fetchSignInWithGoogle,
  fetchSignInWithFacebook,
};
