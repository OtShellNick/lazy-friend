import { Metadata } from 'next';

import { CreateProject as CreateProjectComponent } from '@components/CreateProject';
import { Template } from '@components/Template';

export const metadata: Metadata = {
  title: 'Создание проекта',
};
const CreateProject = () => {
  return (
    <Template>
      <CreateProjectComponent />
    </Template>
  );
};

export default CreateProject;

export const revalidate = 600;
