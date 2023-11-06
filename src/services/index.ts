import { axiosRequest } from '@/lib/api';
import { url } from '@/lib/utils';

export type DepartmentResponse = {
  id: number;
  name: string;
  production_flow?: number;
};

type Staff = {
  name: string;
  payrollNo: string;
  department: string;
};

export async function getDepartments(): Promise<DepartmentResponse[]> {
  const { data } = await axiosRequest(url + '/departments');

  return data;
}

export async function createStaff(values: Staff) {
  const staffFields = {
    user_id: values.payrollNo,
    name: values.name,
    password: '123456',
    department_id: values.department,
  };
  const staff = await axiosRequest(
    `${url}/users`,
    'POST',
    JSON.stringify(staffFields)
  );
  return staff;
}

export async function getStaffByDepartment(
  department: string | null
): Promise<User[] | null> {
  if (!department) return null;
  const { data } = await axiosRequest(url + '/staffs/' + department);

  return data;
}
