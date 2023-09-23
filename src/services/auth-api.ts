import { USERS } from '@/features/authentication/constants';

type UserFields = { userId: string; password: string };

export async function login({ userId, password }: UserFields): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = USERS.find(user => user.userId === userId);

      if (!user || user.password !== password) {
        reject(new Error('Invalid credentials passed'));
      } else {
        resolve(user);
      }
    }, 2000);
  });
}

export async function getUser(): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const storedUser = localStorage.getItem('user');
        const user = storedUser ? JSON.parse(storedUser) : null;
        if (user) {
          resolve(user);
        } else {
          reject(new Error('Something went wrong while fetching user data'));
        }
      } catch (error) {
        reject(new Error('Something went wrong while fetching user data'));
        // // Handle potential errors when parsing the stored user data
        // console.error('Error fetching user from localStorage:', error);
        // resolve(null);
      }
    }, 2000); // Simulate a 1-second delay before resolving
  });
}
