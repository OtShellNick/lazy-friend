import { compare } from 'bcrypt';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import mongo from '@lib/mongo';

type TCredentials = {
  email: string;
  password: string;
};

type TUser = {
  id: string;
  name: string;
  nickname: string;
  email: string;
  specialization: string;
};

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: TCredentials | undefined): Promise<TUser | null> {
        if (credentials?.password && credentials?.email) {
          const { email, password } = credentials;

          try {
            const users = await mongo.getCollection('users');

            const user = await users.findOne({
              email,
            });

            if (!user) {
              return null;
            }

            const isValid = await compare(password, user.password);

            if (!isValid) return null;

            return {
              id: user._id.toString(),
              name: user.name,
              nickname: user.nickname,
              email: user.email,
              specialization: user.specialization,
            };
          } catch (e) {
            console.log(e);
            return null;
          }
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 3 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user && 'nickname' in user && 'specialization' in user) {
        token.id = user.id;
        token.name = user.name;
        token.nickname = user.nickname;
        token.email = user.email;
        token.specialization = user.specialization;
      }

      return token;
    },
    async session({ session }) {
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
