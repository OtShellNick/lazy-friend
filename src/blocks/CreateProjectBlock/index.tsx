import { CreateProjectForm } from '@blocks/CreateProjectForm';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@ui/card';

type TCreateProjectBlockProps = {
  className?: string;
};
export const CreateProjectBlock = ({ className = '' }: TCreateProjectBlockProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Создание проекта</CardTitle>
        <CardDescription>Форма создания проекта</CardDescription>
      </CardHeader>
      <CardContent>
        <CreateProjectForm />
      </CardContent>
      <CardFooter>Footer</CardFooter>
    </Card>
  );
};
