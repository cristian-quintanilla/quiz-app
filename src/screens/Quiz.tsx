import { useSelector } from 'react-redux';
import { Card, CardHeader, Divider, Image } from '@nextui-org/react';

import { Countdown, CurrentQuestion } from '../components';
import { RootState } from '../store/rootReducer';

export const Quiz = () => {
  const { currentQuestion, totalQuestions } = useSelector((state: RootState) => state.questions);

  return (
    <Card>
      <CardHeader className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            width={ 42 }
            alt="GitHub"
            src="/faq.png"
          />

          <p className="text-lg font-semibold">
            Question { currentQuestion } of { totalQuestions }
          </p>
        </div>

        <Countdown />
      </CardHeader>

      <Divider/>

      <CurrentQuestion />
    </Card>
  );
}