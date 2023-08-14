// ========================== api =============================
import api from "../../lib/api-request/api-request";

// ========================== redux ===========================
import { createAsyncThunk } from "@reduxjs/toolkit";

// ========================== interfaces ======================
import { ISignInRequest, ISignInResponse } from "../../utils/types/interfaces/sign-in.interface";
import { ISignUpRequest, ISignUpResponse } from "../../utils/types/interfaces/sign-up.interface";

// ========================== const ======================
import { Endpoint } from "../../utils/enum/endpoint.enum";
import { ICheckAuthResponse } from "../../utils/types/interfaces/check-auth.interface";
import { Status } from "../../utils/enum/statuses.enum";

export const fetchSignIn = createAsyncThunk<ISignInResponse, ISignInRequest, {}>(
  Endpoint.Login,
  async (data: ISignInRequest, { rejectWithValue }) => {
    try {
      const response = await api.post(Endpoint.Login, data);
      return { id: `123456` };
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message as string);
    }
  }
);

export const fetchSignUp = createAsyncThunk<ISignUpResponse, ISignUpRequest, {}>(
  Endpoint.Registration,
  async (data: ISignUpRequest, { rejectWithValue }) => {
    try {
      const response = await api.post(Endpoint.Registration, data);
      return { id: `123456` };
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message as string);
    }
  }
);

export const fetchCheckAuth = createAsyncThunk<{}, ICheckAuthResponse, {}>(
  Endpoint.CheckAuth,
  async ({ rejectWithValue }) => {
    try {
      const response = await api.get(Endpoint.CheckAuth);
      return { status: Status.Authenticated };
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message as string);
    }
  }
);

export const logout = createAsyncThunk(Endpoint.Logout, async ({ rejectWithValue }) => {
  try {
    const response = await api.get(Endpoint.Logout);
    return { status: Status.Unauthenticated };
  } catch (error: any) {
    return rejectWithValue(error?.response?.data?.message as string);
  }
});

export const fetchSignInWithGoogle = createAsyncThunk(
  Endpoint.GoogleVerification,
  async ({ rejectWithValue }) => {
    try {
      const response = await api.get(Endpoint.GoogleVerification);
      return { status: Status.Authenticated };
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message as string);
    }
  }
);

export const fetchSignInWithFacebook = createAsyncThunk(
  Endpoint.FacebookVerification,
  async ({ rejectWithValue }) => {
    try {
      const response = await api.get(Endpoint.FacebookVerification);
      return { status: Status.Authenticated };
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message as string);
    }
  }
);
