import { Card, CardHeader, Divider, Image } from '@nextui-org/react';
import { Countdown, CurrentQuestion } from '../components';

export const Quiz = () => {
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
            Question 1 of 5
          </p>
        </div>

        <Countdown />
      </CardHeader>

      <Divider/>

      <CurrentQuestion />
    </Card>
  );
}
