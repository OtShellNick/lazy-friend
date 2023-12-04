import { Metadata } from 'next';

import { Template } from '@components/Template';

export const metadata: Metadata = {
  title: 'Создание проекта',
};
const CreateProject = () => {
  return <Template>Создание проекта</Template>;
};

export default CreateProject;

export const revalidate = 600;
