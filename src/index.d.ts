type UserType = 'Admin' | 'User';

type JobStatus = 'ongoing' | 'paused' | 'completed';

type Department = {
  id: number;
  text: string;
};

type User = {
  userId: string;
  userName: string;
  password: string;
  departmentId: number | null;
  role: UserType;
};

type JobCard = {
  id: number;
  jobcardNo: string;
  client: string;
  description: string;
  cumulativeHrs: number;
  hoursInProduction: number;
  currentDepartment?: string;
  startedOn: Date;
  status: JobStatus;
  completedDate?: Date;
  salesPerson: string;
};

type Options = {
  label: string;
  value: string;
};
