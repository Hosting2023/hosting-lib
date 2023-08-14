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
  orderCreationStatus: Status | null;
  errors: {
    getWorker: string | null;
    createOrder: string | null;
  };
  pending: {
    getWorker: boolean;
    createOrder: boolean;
  };
};

const initialState: IInitialState = {
  workerInfo: null,
  orderCreationStatus: null,
  errors: {
    getWorker: null,
    createOrder: null,
  },
  pending: {
    getWorker: false,
    createOrder: false,
  },
};

const workerSlice = createSlice({
  name: "worker",
  initialState,
  reducers: {
    clearErrors: (state: IInitialState) => {
      state.errors.getWorker = null;
      state.errors.createOrder = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetWorkerInfo.pending, (state: IInitialState) => {
      state.pending.getWorker = true;
      state.errors.getWorker = null;
    });
    builder.addCase(
      fetchGetWorkerInfo.fulfilled,
      (state: IInitialState, action: PayloadAction<IGetWorkerResponse>) => {
        state.pending.getWorker = false;
        state.workerInfo = action.payload;
      }
    );
    builder.addCase(
      fetchGetWorkerInfo.rejected,
      (state: IInitialState, action: PayloadAction<string>) => {
        state.pending.getWorker = false;
        state.errors.getWorker = action.payload;
      }
    );

    builder.addCase(fetchCreateOrder.pending, (state: IInitialState) => {
      state.pending.createOrder = true;
      state.errors.createOrder = null;
    });
    builder.addCase(
      fetchCreateOrder.fulfilled,
      (state: IInitialState, action: PayloadAction<{ response: Status }>) => {
        state.pending.createOrder = false;
        state.orderCreationStatus = action.payload.response;
      }
    );
    builder.addCase(
      fetchCreateOrder.rejected,
      (state: IInitialState, action: PayloadAction<string>) => {
        state.pending.createOrder = false;
        state.errors.createOrder = action.payload;
      }
    );
  },
});

const { reducer } = workerSlice;
export default reducer;
export const { clearErrors } = workerSlice.actions;
export { fetchGetWorkerInfo, fetchCreateOrder };
