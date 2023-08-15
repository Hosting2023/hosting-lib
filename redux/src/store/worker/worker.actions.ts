// ========================== api =============================
import api from "../../lib/api-request/api-request";

// ========================== redux ===========================
import { createAsyncThunk } from "@reduxjs/toolkit";

// ========================== interfaces ======================
import {
  IGetWorkerRequest,
  IGetWorkerResponse,
} from "../../utils/types/interfaces/get-worker.interface";

import {
  ICreateOrderRequest,
  ICreateOrderResponse,
} from "../../utils/types/interfaces/create-order";

// ========================== const ============================
import { Endpoint } from "../../utils/enum/endpoint.enum";
import { Status } from "../../utils/enum/statuses.enum";

export const fetchGetWorkerInfo = createAsyncThunk<IGetWorkerResponse, IGetWorkerRequest, {}>(
  Endpoint.GetWorker,
  async (data: IGetWorkerRequest, { rejectWithValue }) => {
    try {
      // const response = await api.post(Endpoint.GetWorker, data);
      return {
        profile: {
          userId: "12345",
          lastName: "Doe",
          firstName: "John",
        },
        schedule: [
          {
            activeWeekdays: ["MON", "TUE", "WED"],
            startTime: "09:00",
            endTime: "17:00",
          },
          {
            activeWeekdays: ["THU", "FRI"],
            startTime: "10:00",
            endTime: "18:00",
          },
        ],
      };
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message as string);
    }
  }
);

export const fetchCreateOrder = createAsyncThunk<ICreateOrderResponse, ICreateOrderRequest, {}>(
  Endpoint.CreateOrder,
  async (data: ICreateOrderRequest, { rejectWithValue }) => {
    try {
      // const response = await api.post(Endpoint.CreateOrder, data);
      return { response: Status.Created };
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message as string);
    }
  }
);
