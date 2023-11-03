import * as z from 'zod';

export const formSchema = z.object({
  email: z.string().nonempty('Enter userid'),
  password: z.string().min(4, 'Password has to be 4 characters or more'),
});

export const departments: Department[] = [
  {
    id: 1,
    text: 'Yard',
  },
  {
    id: 2,
    text: 'Machinery',
  },
  {
    id: 3,
    text: 'Joinery',
  },
  {
    id: 4,
    text: 'Carving',
  },
  {
    id: 5,
    text: 'Sanding',
  },
  {
    id: 6,
    text: 'Polishing',
  },
  {
    id: 7,
    text: 'Upholstery',
  },
  {
    id: 8,
    text: 'Finishing',
  },
  {
    id: 9,
    text: 'CNC',
  },
];

export const USERS: User[] = [
  {
    userId: '9070',
    userName: 'Test User',
    departmentId: 1,
    role: 'User',
    password: '1234',
  },
  {
    userId: 'admin',
    userName: 'administrator',
    departmentId: null,
    role: 'Admin',
    password: 'deuces',
  },
];
