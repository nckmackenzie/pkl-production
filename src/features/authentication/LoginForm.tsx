import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { formSchema } from './constants';
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
import { useLogin } from './useLogin';

export default function LoginForm() {
  const { isLoading, login } = useLogin();
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      userId: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // const user = USERS.find(user => user.userId === values.userId);

    // if (!user || user?.password !== values.password) {
    //   toast.error('Invalid credentials');
    //   return;
    // }

    login(
      { userId: values.userId, password: values.password },
      {
        onError: () => {
          form.reset();
        },
      }
    );
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
                <Input placeholder="eg 9070" {...field} disabled={isLoading} />
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
                <Input
                  type="password"
                  placeholder="password"
                  {...field}
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          Login
        </Button>
      </form>
    </Form>
  );
}
