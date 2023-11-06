import { axiosRequest } from '@/lib/api';
import { url } from '@/lib/utils';

type Hours = {
  carving: number | null;
  cnc: number | null;
  finishing: number | null;
  joinery: number | null;
  machinery: number | null;
  polishing: number | null;
  sanding: number | null;
  upholstery: number | null;
  yard: number | null;
};

type Details = {
  client: string;
  jobcard_no: string;
  raised_date: string;
  sales_person: string;
  subject: string;
  value: number | null;
};

type Create = {
  details: Details;
  hours: Hours;
};

type TaskDetails = {
  jobcard_id: string;
  department_id: string;
  remarks?: string | null;
  staffs: string[] | undefined;
  started: string;
};

const baseUrl = `${url}/jobcards`;

export async function getJobCards(): Promise<JobCardResponse[]> {
  const { data } = await axiosRequest(baseUrl);
  return data;
}

export async function createJobcard({ details, hours }: Create) {
  await axiosRequest(
    `${url}/jobcards`,
    'POST',
    JSON.stringify({ details, hours })
  );
}

export async function getOpenJobCards(): Promise<JobCardResponse[]> {
  const { data } = await axiosRequest(baseUrl + '/open');
  return data;
}

export async function createTask(details: TaskDetails) {
  await axiosRequest(`${url}/tasks`, 'POST', JSON.stringify(details));
}
