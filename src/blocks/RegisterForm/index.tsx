'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { SPECIALIZATIONS } from '@/data';
import { TUserRegisterData } from '@/types';
import { Schema } from '@lib/validators';
import { registerThunk } from '@redux/Auth/thunks';
import { useAppDispatch } from '@redux/store';
import { Button } from '@ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@ui/form';
import { Input } from '@ui/input';
import { ScrollArea } from '@ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@ui/select';

type TInputs = {
  name: string;
  nickname: string;
  email: string;
  password: string;
  repeatPassword: string;
  specialization:
    | 'PM'
    | 'SA'
    | 'BA'
    | 'SD'
    | 'DM'
    | 'DevOps'
    | 'Product'
    | 'Marketing'
    | 'SMM'
    | 'Traffic'
    | 'MM'
    | 'QAM'
    | 'QAA'
    | 'QAL'
    | 'Backend'
    | 'Frontend'
    | 'Python'
    | 'Java'
    | 'Android'
    | 'IOS'
    | 'C++'
    | 'Go'
    | 'DS'
    | 'ComputerVision'
    | 'HR'
    | 'WEB'
    | 'Cloud'
    | 'DataEngineer'
    | 'other';
};

export const RegisterForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const form = useForm<TInputs>({
    resolver: yupResolver(Schema.register),
  });
  //eslint-disable-next-line
  const onSubmit: SubmitHandler<TInputs> = data => {
    const userData: TUserRegisterData = {
      name: data.name,
      nickname: data.nickname,
      email: data.email,
      password: data.password,
      specialization: data.specialization,
    };

    dispatch(registerThunk(userData));
    router.push('/login');
  };

  const renderSpecialization = useMemo(() => {
    return SPECIALIZATIONS.map(spec => {
      return (
        <SelectItem value={spec.value} key={spec.value}>
          {spec.label}
        </SelectItem>
      );
    });
  }, []);
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
                <SelectContent className='h-[40vh]'>
                  <ScrollArea>{renderSpecialization}</ScrollArea>
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
