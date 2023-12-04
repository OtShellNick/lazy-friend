import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import mongo from '@lib/mongo';

export async function GET(req: NextApiRequest) {
  const res = {
    ...NextResponse.next(),
    getHeader: (t: string) => headers().get(t),
    setHeader: (t: string, v: string) => new Headers().set(t, v),
  } as unknown as NextApiResponse;

  try {
    const session = await getServerSession(req, res, authOptions);

    if (!session) return Response.json({ error: 'Не авторизован' }, { status: 401 });

    const users = await mongo.getCollection('users');
    const user = await users.findOne({ email: session.user?.email });

    if (!user) return Response.json({ error: 'Пользователь не найден' }, { status: 404 });

    return Response.json(
      {
        id: user._id.toString(),
        name: user.name,
        nickname: user.nickname,
        email: user.email,
        specialization: user.specialization,
        role: user.role,
      },
      { status: 200 },
    );
  } catch (e) {
    return Response.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}
