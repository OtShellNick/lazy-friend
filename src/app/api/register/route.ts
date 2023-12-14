import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

import { TUserRegisterData } from '@/types';
import mongo from '@lib/mongo';

const { SALT } = process.env;

const hashPassword = async (password: string): Promise<string | null> => {
  try {
    const hash = await bcrypt.hash(password, Number(SALT));
    return hash;
  } catch (error) {
    return null;
  }
};
export async function POST(request: Request) {
  const users = await mongo.getCollection('users');

  try {
    const data: TUserRegisterData = await request.json();
    const userData = await users.findOne({ email: data.email });

    if (userData) {
      return new NextResponse(
        JSON.stringify({
          status: 'USER_ALREADY_EXISTS',
          message: 'Пользователь уже существует - авторизируйтесь используя свои данные',
        }),
        {
          status: 409,
        },
      );
    }

    const saveUserData = {
      ...data,
      password: await hashPassword(data.password),
      role: 'user',
    };

    await users.insertOne(saveUserData);

    return new NextResponse(
      JSON.stringify({
        status: 'success',
        data: {},
      }),
    );
  } catch (e) {
    return new NextResponse(
      JSON.stringify({
        status: 'INTERNAL_SERVER_ERROR',
        message: 'Internal server error',
      }),
      {
        status: 500,
      },
    );
  }
}
