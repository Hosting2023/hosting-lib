// ========================== api =============================
import api from "../../lib/api-request/api-request";

// ========================== redux ===========================
import { createAsyncThunk } from "@reduxjs/toolkit";

// ========================== interfaces ======================
import {
  IEmailVerifyCodeRequest,
  IEmailVerifyCodeResponse,
} from "../../utils/types/interfaces/email-verify-code.interface";
import {
  IVerifyCodeResponse,
  IVerifyCodeRequest,
} from "../../utils/types/interfaces/get-verify-code.interface";

// ========================== const ============================
import { Endpoint } from "../../utils/enum/endpoint.enum";

export const fetchEmailVerifyCode = createAsyncThunk<
  IEmailVerifyCodeResponse,
  IEmailVerifyCodeRequest,
  {}
>(Endpoint.EmailVerifyCode, async (data: IEmailVerifyCodeRequest, { rejectWithValue }) => {
  try {
    const response = await api.post(Endpoint.EmailVerifyCode, data);
    return { code: `123456` };
  } catch (error: any) {
    return rejectWithValue(error?.response?.data?.message as string);
  }
});

export const fetchGetVerifyCode = createAsyncThunk<IVerifyCodeResponse, IVerifyCodeRequest, {}>(
  Endpoint.GetVerifyCode,
  async (data: IVerifyCodeRequest, { rejectWithValue }) => {
    try {
      const response = await api.post(Endpoint.GetVerifyCode, data);
      return { response: true };
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message as string);
    }
  }
);
