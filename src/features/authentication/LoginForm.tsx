import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { USERS, formSchema } from './constants';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';

import { useUser } from './useUser';

export default function LoginForm() {
  const { login } = useUser();
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      userId: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const user = USERS.find(user => user.userId === values.userId);

    if (!user || user?.password !== values.password) {
      toast.error('Invalid credentials');
      return;
    }
    toast.success('Login success!');
    login(user);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="userId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>UserID</FormLabel>
              <FormControl>
                <Input placeholder="eg 9070" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Login</Button>
      </form>
    </Form>
  );
}
