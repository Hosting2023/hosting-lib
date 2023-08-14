export interface IForgotPasswordFirstStepRequest {
  identifier: string;
}

export interface IForgotPasswordSecondStepRequest {
  newPassword: string;
}

export interface IForgotPasswordFirstStepResponse {
  code: string;
}

export interface IForgotPasswordSecondStepResponse {
  response: string;
}
