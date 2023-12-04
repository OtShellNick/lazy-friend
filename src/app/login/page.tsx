import type { Metadata } from 'next';

import { Login } from '@components/Login';

export const metadata: Metadata = {
  title: 'Авторизация',
};
const LoginPage = () => {
  return <Login />;
};

export default LoginPage;
