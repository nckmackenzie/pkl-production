import { axiosRequest } from '@/lib/api';
import { url } from '@/lib/utils';

type TaskDetails = {
  jobcard_id: string;
  department_id: string;
  remarks?: string | null;
  staffs: string[] | undefined;
  started: string;
};

type TaskObject = {
  actionType?: string;
  transactionDate: string;
  remarks?: string | null;
};

type TaskActionTypes = {
  details: TaskObject;
  taskId: string;
};

type Filters = {
  status: string;
  department?: string | null;
};

const baseUrl = `${url}/tasks`;

export async function createTask(details: TaskDetails) {
  await axiosRequest(`${baseUrl}`, 'POST', JSON.stringify(details));
}

export async function getIncompleteTasks({
  status,
  department,
}: Filters): Promise<Task[]> {
  if (!status) throw new Error('Task status not defined');

  let params = `status=${status}`;

  if (department) {
    params += '&department=' + department;
  }

  const { data } = await axiosRequest(`${baseUrl}/by-status?${params}`);

  return data;
}

export async function taskActions({ details, taskId }: TaskActionTypes) {
  await axiosRequest(`${baseUrl}/${taskId}`, 'PATCH', JSON.stringify(details));
}
