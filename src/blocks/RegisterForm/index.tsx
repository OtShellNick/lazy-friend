'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Schema } from '@lib/validators';
import { Button } from '@ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@ui/form';
import { Input } from '@ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@ui/select';

type TInputs = {
  name: string;
  nickname: string;
  email: string;
  password: string;
  repeatPassword: string;
  specialization: 'frontend' | 'backend' | 'designer';
};

export const RegisterForm = () => {
  const form = useForm<TInputs>({
    resolver: yupResolver(Schema.register),
  });
  //eslint-disable-next-line
  const onSubmit: SubmitHandler<TInputs> = data => console.log(data);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-4'>
        <div className='grid grid-cols-2 gap-1 md:gap-4'>
          <div>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Имя</FormLabel>
                  <FormControl>
                    <Input placeholder='Имя' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name='nickname'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ник</FormLabel>
                  <FormControl>
                    <Input placeholder='Ник' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
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
        <div className='grid grid-cols-2 gap-1 md:gap-4'>
          <div>
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
          </div>
          <div>
            <FormField
              control={form.control}
              name='repeatPassword'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Повторите пароль</FormLabel>
                  <FormControl>
                    <Input placeholder='Повторите пароль' type='password' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name='specialization'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Специальность</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Выберите вашу специальность' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='frontend'>Front-End</SelectItem>
                  <SelectItem value='backend'>Back-End</SelectItem>
                  <SelectItem value='designer'>Designer</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Создать аккаунт</Button>
      </form>
    </Form>
  );
};
