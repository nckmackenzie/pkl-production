// import { Database } from './supabase/schema';

type UserType = 'super admin' | 'admin' | 'supervisor' | 'staff';

type JobStatus = 'unassigned' | 'ongoing' | 'paused' | 'completed';

type ResponseStatus = 'success' | 'error' | 'unauthenticated';

type Department = {
  id: number;
  text: string;
};

type User = {
  id: string;
  user_id: string;
  name: string;
  department_id: number | string | null;
  role: UserType;
};

// type Jobcard = Database['public']['Tables']['jobcards']['Row'];
// type JobcardHours = Database['public']['Tables']['jobcard_hours']['Row'];

type JobCard = {
  id: string;
  jobcardNo: string;
  client: string;
  subject: string;
  cumulativeHrs?: number;
  hoursInProduction?: number;
  currentDepartment?: string;
  startedOn: Date;
  status: JobStatus;
  completedDate?: Date;
  salesPerson: string;
};

type JobCardResponse = {
  id: string;
  jobcard_no: string;
  client: string;
  subject: string;
  cumulative_hours?: number;
  hours_in_production?: number;
  current_department?: string;
  started_on: Date;
  status: JobStatus;
  completed_date?: Date;
  sales_person: string;
};

type Options = {
  label: string;
  value: string;
};

// type Task = {
//   id: number;
//   jobcardNo: string;
//   staff: string;
//   hrsTaken: number;
//   hrsAssigned: number;
//   staffs?: string[];
// };
