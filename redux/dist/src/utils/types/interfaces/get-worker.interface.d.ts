export interface IGetWorkerRequest {
    frequency: string;
    allergy: string;
    type: string;
    address: string;
}
export interface IGetWorkerResponse {
    name: string;
    age: string;
    estimate: number;
    activeWeekdays: string[];
    startTime: string;
    endTime: string;
}
