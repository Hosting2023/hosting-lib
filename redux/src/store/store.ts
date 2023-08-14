import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

// =========================== Slices ===========================
import auth from "./auth/auth.slices";
import verify from "./verify/verify.slices";
import worker from "./worker/worker.slices";

const store = configureStore({
  reducer: {
    auth,
    verify,
    worker,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
