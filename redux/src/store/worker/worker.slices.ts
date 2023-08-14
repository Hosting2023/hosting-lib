// ========================== redux ===========================
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ========================== actions ===========================
import { fetchGetWorkerInfo, fetchCreateOrder } from "./worker.actions";

// ========================== consts ============================
import { Status } from "../../utils/enum/statuses.enum";

// ========================== types =============================
import { IGetWorkerResponse } from "../../utils/types/interfaces/get-worker.interface";

type IInitialState = {
  workerInfo: IGetWorkerResponse | null;
  createOrder: Status | null;
  errors: {
    workerInfo: string | null;
    createOrder: string | null;
  };
  pending: {
    workerInfo: boolean;
    createOrder: boolean;
  };
};

const initialState: IInitialState = {
  workerInfo: null,
  createOrder: null,
  errors: {
    workerInfo: null,
    createOrder: null,
  },
  pending: {
    workerInfo: false,
    createOrder: false,
  },
};

const workerSlice = createSlice({
  name: "worker",
  initialState,
  reducers: {
    clearErrors: (state: IInitialState) => {
      state.errors.workerInfo = null;
      state.errors.createOrder = null;
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(fetchGetWorkerInfo.pending, (state: IInitialState) => {
        state.pending.workerInfo = true;
        state.errors.workerInfo = null;
      })
      .addCase(
        fetchGetWorkerInfo.fulfilled,
        (state: IInitialState, action: PayloadAction<IGetWorkerResponse>) => {
          state.pending.workerInfo = false;
          state.workerInfo = action.payload;
        }
      )
      .addCase(
        fetchGetWorkerInfo.rejected,
        (state: IInitialState, action: PayloadAction<string>) => {
          state.pending.workerInfo = false;
          state.errors.workerInfo = action.payload;
        }
      );

    builder
      .addCase(fetchCreateOrder.pending, (state: IInitialState) => {
        state.pending.createOrder = true;
        state.errors.createOrder = null;
      })
      .addCase(
        fetchCreateOrder.fulfilled,
        (state: IInitialState, action: PayloadAction<{ response: Status }>) => {
          state.pending.createOrder = false;
          state.createOrder = action.payload.response;
        }
      )
      .addCase(fetchCreateOrder.rejected, (state: IInitialState, action: PayloadAction<string>) => {
        state.pending.createOrder = false;
        state.errors.createOrder = action.payload;
      });
  },
});

const { reducer } = workerSlice;
export default reducer;
export const { clearErrors } = workerSlice.actions;
export { fetchGetWorkerInfo, fetchCreateOrder };
