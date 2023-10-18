import { Button, Card, CardHeader, CardBody, CardFooter, Divider, Image } from '@nextui-org/react';
import { BsFillPlayFill } from 'react-icons/bs';

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

      <CardBody className="flex flex-col gap-6 w-full md:w-11/12 mx-auto my-4">
        <CurrentQuestion />
      </CardBody>

      <Divider/>

      <CardFooter className="w-full md:w-10/12 mx-auto my-4 flex justify-end">
        <Button isDisabled color="primary" radius="sm">
          Next
          <BsFillPlayFill size={ 22 } />
        </Button>
      </CardFooter>
    </Card>
  );
}
