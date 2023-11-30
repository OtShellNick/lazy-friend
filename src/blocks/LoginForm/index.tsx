'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { RESPONSE_STATUS } from '@/data';
import { Schema } from '@lib/validators';
import { Button } from '@ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@ui/form';
import { Input } from '@ui/input';

type TInputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const [error, setError] = useState<string>('');
  const router = useRouter();
  const form = useForm<TInputs>({
    resolver: yupResolver(Schema.login),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  //eslint-disable-next-line
  const onSubmit: SubmitHandler<TInputs> = async (data) => {
    setError('');
    await signIn('credentials', { ...data, redirect: false }).then(value => {
      console.log('value', value);
      if (value) {
        const { status } = value;

        if (status === RESPONSE_STATUS.UNAUTHORIZED) {
          setError('Неверный логин или пароль');
        }

        if (status === RESPONSE_STATUS.SUCCESS) {
          router.push('/');
        }
      }
      return value;
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-4'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='Email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <Input placeholder='Пароль' type='password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormDescription>{error}</FormDescription>
        <Button type='submit'>Войти</Button>
      </form>
    </Form>
  );
};
