import bcrypt from 'bcrypt';
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

    const saveUserData = {
      ...data,
      password: await hashPassword(data.password),
    };

    const user = await users.insertOne(saveUserData);
    return new NextResponse(
      JSON.stringify({
        status: 'success',
        data: {},
      }),
    );
  } catch (e) {
    return new NextResponse(
      JSON.stringify({
        status: 'error',
        message: JSON.stringify(e),
      }),
      {
        status: 400,
      },
    );
  }
}
