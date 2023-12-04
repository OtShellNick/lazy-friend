import { Metadata } from 'next';

import { Template } from '@components/Template';

export const metadata: Metadata = {
  title: 'Главная',
};
const Home = () => {
  return <Template>Main page</Template>;
};

export default Home;

export const revalidate = 600;
