export enum Endpoint {
  Registration = "auth/registration", //POST
  Login = "auth/login", //POST

  CheckAuth = "auth/check-auth", //GET

  EmailVerifyCode = "auth/email-verify-code", //POST
  GetVerifyCode = "auth/get-verify-code", //POST

  ChangeAuthData = "auth", //PUT

  GoogleVerification = "auth/google", //GET
  GoogleRedirect = "auth/google/redirect", //GET

  FacebookVerification = "auth/facebook", //GET
  FacebookRedirect = "auth/facebook/redirect", //GET

  Logout = "auth/logout", //GET

  GetWorker = "profile/get-worker", //POST
  CreateOrder = "profile/create-order", //POST
}
