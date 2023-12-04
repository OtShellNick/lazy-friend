import { Metadata } from 'next';

import { Register } from '@components/Register';

export const metadata: Metadata = {
  title: 'Регистрация',
};
const RegisterPage = () => {
  return <Register />;
};

export default RegisterPage;
