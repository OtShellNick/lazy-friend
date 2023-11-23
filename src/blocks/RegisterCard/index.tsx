import Link from 'next/link';

import { RegisterForm } from '@blocks/RegisterForm';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@ui/card';
import { Separator } from '@ui/separator';

export const RegisterCard = () => {
  return (
    <Card className='max-w-sm md:max-w-lg'>
      <CardHeader className='space-y-1'>
        <CardTitle className='text-2xl'>Создание аккаунта</CardTitle>
        <CardDescription className='text-sm max-w-xs md:max-w-md'>
          Создав аккаунт - Вы сможете как найти проект для участия, так и создать свой проект и
          найти участников для него!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
      <CardFooter className='flex flex-col'>
        <Separator className='mb-6' />
        <div className='flex justify-between items-center text-muted-foreground'>
          <span className='mr-2'>Уже есть аккаунт?</span>
          <Link href='/login' className='text-accent-foreground hover:underline hover:decoration-1'>
            Войти
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};
