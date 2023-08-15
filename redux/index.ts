// API Request Exports
export * from "./src/lib/api-request/api-request";

// STORE
export * from "./src/store/store";

// SLICES
// Auth Slices
export {
  fetchSignIn,
  fetchSignUp,
  fetchCheckAuth,
  logout,
  fetchSignInWithGoogle,
  fetchSignInWithFacebook,
  clearErrors as clearAuthErrors,
} from "./src/store/auth/auth.slices";

// Verify Slices
export {
  fetchEmailVerifyCode,
  fetchGetVerifyCode,
  clearErrors as clearVerifyErrors,
} from "./src/store/verify/verify.slices";

// Worker Slices
export {
  fetchGetWorkerInfo,
  fetchCreateOrder,
  clearErrors as clearWorkerErrors,
} from "./src/store/worker/worker.slices";

//SELECTORS
export * from "./src/store/auth/auth.selectors";

export * from "./src/store/verify/verify.selectors";

export * from "./src/store/worker/worker.selectors";

//REDUX
export { Provider } from "react-redux";
