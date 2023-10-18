import { Card, CardHeader, Divider, Image } from '@nextui-org/react';

import { QuestionsForm } from '../components';

export const SelectCategories = () => {
  return (
    <Card>
      <CardHeader className="flex gap-3">
        <Image
          width={ 42 }
          alt="GitHub"
          src="/faq.png"
        />

        <div className="flex flex-col">
          <p className="text-lg font-semibold">QuizApp</p>
          <p className="text-small text-default-500">Made by Cristian Quintanilla</p>
        </div>
      </CardHeader>

      <Divider/>

      <QuestionsForm />
    </Card>
  );
}
