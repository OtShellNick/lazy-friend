import { Metadata } from 'next';

import { Template } from '@components/Template';

export const metadata: Metadata = {
  title: 'Помощь',
};
const Help = () => {
  return <Template>Помощь</Template>;
};

export default Help;

export const revalidate = 600;
