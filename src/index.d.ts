type UserType = 'Admin' | 'User';

type Department = {
  id: number;
  text: string;
};

type User = {
  userId: string;
  password: string;
  departmentId: number | null;
  role: UserType;
};
