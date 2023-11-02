import * as z from 'zod';
export const formSchema = z.object({
  staff: z.string().nonempty('Field is required'),
});

export const EMPLOYEES = [
  {
    value: 'employee 1',
    label: 'Employee 1',
  },
  {
    value: 'employee 2',
    label: 'Employee 2',
  },
  {
    value: 'employee 3',
    label: 'Employee 3',
  },
  {
    value: 'employee 4',
    label: 'Employee 4',
  },
  {
    value: 'employee 5',
    label: 'Employee 5',
  },
];
