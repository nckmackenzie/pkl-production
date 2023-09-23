import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Logo from '@/components/ui/Logo';
import LoginForm from './LoginForm';

export default function LoginBox() {
  return (
    <main className="h-dvh flex justify-center items-center px-4 md:px-0">
      <Card className="max-w-xl w-full">
        <CardHeader>
          <Logo />
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </main>
  );
}
