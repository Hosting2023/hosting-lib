export interface ISignUpRequest {
    firstname: string;
    lastname: string;
    dateOfBirth: string;
    email: string;
    mobilePhone: string;
    password: string;
}
export interface ISignUpResponse {
    status: string;
}
