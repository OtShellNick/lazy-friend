import { Metadata } from 'next';

import { Template } from '@components/Template';

export const metadata: Metadata = {
  title: 'Проекты',
};
const Projects = () => {
  return <Template>Проекты</Template>;
};

export default Projects;

export const revalidate = 600;
