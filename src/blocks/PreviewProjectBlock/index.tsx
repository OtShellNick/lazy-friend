'use client';

import { getProjectData } from '@redux/selectors';
import { useAppSelector } from '@redux/store';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@ui/card';

type TPreviewProjectBlockProps = {
  className?: string;
};

export const PreviewProjectBlock = ({ className = '' }: TPreviewProjectBlockProps) => {
  const { project } = useAppSelector(getProjectData);
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Превью</CardTitle>
        <CardDescription>Как будет выглядеть карточка проекта</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{project.name}</p>
        <p>{project.description}</p>
      </CardContent>
    </Card>
  );
};
