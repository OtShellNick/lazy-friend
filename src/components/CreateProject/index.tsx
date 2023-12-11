import { CreateProjectBlock } from '@blocks/CreateProjectBlock';
import { PreviewProjectBlock } from '@blocks/PreviewProjectBlock';

export const CreateProject = () => {
  return (
    <div className='md:grid md:grid-cols-create-project gap-4 h-full w-full'>
      <CreateProjectBlock className='h-full w-full border' />
      <PreviewProjectBlock className='h-full w-full border hidden md:block' />
    </div>
  );
};
