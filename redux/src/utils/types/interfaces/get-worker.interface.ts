export interface IGetWorkerRequest {
  frequency: string;
  allergy: string;
  type: string;
  address: string;
}

interface IWorkPeriod {
  activeWeekdays: string[];
  startTime: string;
  endTime: string;
}

interface IProfile {
  userId: string;
  lastName: string;
  firstName: string;
  schedule: IWorkPeriod[];
}

interface IWorker {
  profile: IProfile;
}

export interface IGetWorkerResponse {
  [index: number]: IWorker;
}
