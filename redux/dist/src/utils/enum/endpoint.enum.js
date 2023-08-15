"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endpoint = void 0;
var Endpoint;
(function (Endpoint) {
    Endpoint["Registration"] = "auth/registration";
    Endpoint["Login"] = "auth/login";
    Endpoint["CheckAuth"] = "auth/check-auth";
    Endpoint["EmailVerifyCode"] = "auth/email-verify-code";
    Endpoint["GetVerifyCode"] = "auth/get-verify-code";
    Endpoint["ChangeAuthData"] = "auth";
    Endpoint["GoogleVerification"] = "auth/google";
    Endpoint["GoogleRedirect"] = "auth/google/redirect";
    Endpoint["FacebookVerification"] = "auth/facebook";
    Endpoint["FacebookRedirect"] = "auth/facebook/redirect";
    Endpoint["Logout"] = "auth/logout";
    Endpoint["GetWorker"] = "profile/get-worker";
    Endpoint["CreateOrder"] = "profile/create-order";
})(Endpoint || (exports.Endpoint = Endpoint = {}));
