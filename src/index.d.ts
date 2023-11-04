// import { Database } from './supabase/schema';

type UserType = 'super admin' | 'admin' | 'supervisor' | 'staff';

type JobStatus = 'ongoing' | 'paused' | 'completed';

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

// // type JobCard = {
// //   id: number;
// //   jobcardNo: string;
// //   client: string;
// //   description: string;
// //   cumulativeHrs: number;
// //   hoursInProduction: number;
// //   currentDepartment?: string;
// //   startedOn: Date;
// //   status: JobStatus;
// //   completedDate?: Date;
// //   salesPerson: string;
// // };

// type Options = {
//   label: string;
//   value: string;
// };

// type Task = {
//   id: number;
//   jobcardNo: string;
//   staff: string;
//   hrsTaken: number;
//   hrsAssigned: number;
//   staffs?: string[];
// };
