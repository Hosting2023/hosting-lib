export interface IGetWorkerRequest {
  frequency: string;
  allergy: string;
  type: string;
  address: string;
}

interface IWorker {
  userId: string;
  lastName: string;
  firstName: string;
}

interface IWorkPeriod {
  activeWeekdays: string[];
  startTime: string;
  endTime: string;
}

export interface IGetWorkerResponse {
  profile: IWorker;
  schedule: IWorkPeriod[];
}
