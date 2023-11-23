import Link from 'next/link';

import { LoginForm } from '@blocks/LoginForm';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@ui/card';
import { Separator } from '@ui/separator';

export const LoginCard = () => {
  return (
    <Card className='max-w-sm md:max-w-lg'>
      <CardHeader className='space-y-1'>
        <CardTitle className='text-2xl'>Авторизация</CardTitle>
        <CardDescription className='text-sm max-w-xs md:max-w-md'>
          Добро пожаловать!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <CardFooter className='flex flex-col'>
        <Separator className='mb-6' />
        <div className='flex justify-between items-center text-muted-foreground'>
          <span className='mr-2'>Еще нет аккаунта?</span>
          <Link
            href='/register'
            className='text-accent-foreground hover:underline hover:decoration-1'>
            Регистрация
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};
