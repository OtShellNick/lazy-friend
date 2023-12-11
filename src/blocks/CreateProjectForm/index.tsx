'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Schema, TProject } from '@lib/validators';
import { setProjectName, setProjectDescription } from '@redux/Project/slice';
import { useAppDispatch } from '@redux/store';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@ui/form';
import { Input } from '@ui/input';
import { ScrollArea } from '@ui/scroll-area';
import { Textarea } from '@ui/textarea';

export const CreateProjectForm = () => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string>('');
  const form = useForm<TProject>({
    resolver: yupResolver(Schema.createProject),
    defaultValues: {
      name: '',
      description: '',
    },
  });

  const onSubmit = (data: TProject) => {
    console.log(data);
    setError('');
  };

  const onNameChange = () => {
    const name = form.getValues('name');
    dispatch(setProjectName(name));
  };

  const onDescriptionChange = () => {
    const description = form.getValues('description');
    dispatch(setProjectDescription(description));
  };

  return (
    <Form {...form}>
      <ScrollArea>
        <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-4 px-1'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Название</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Нзвание проекта'
                    {...field}
                    onChange={event => {
                      field.onChange(event.target.value);
                      onNameChange();
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Описание проекта</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Описание проекта'
                    rows={6}
                    className='resize-none'
                    {...field}
                    onChange={event => {
                      field.onChange(event.target.value);
                      onDescriptionChange();
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormDescription>{error}</FormDescription>
        </form>
      </ScrollArea>
    </Form>
  );
};
