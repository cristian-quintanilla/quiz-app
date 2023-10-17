import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  RadioGroup,
  Radio,
} from '@nextui-org/react';
import { BsFillPlayFill } from 'react-icons/bs';

import { Countdown } from '.';

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

      <CardBody className="flex flex-col gap-6 w-full md:w-11/12 mx-auto my-6">
        <Card>
          <CardBody>
            <p className="font-semibold text-2xl">
              Q. The film "2001: A Space Odyssey" was released on December 31st, 2000.
            </p>
          </CardBody>
        </Card>

        <RadioGroup
          label="Select your answer"
          color="primary"
          // defaultValue="london"
        >
          <Radio value="buenos-aires">Buenos Aires</Radio>
          <Radio value="sydney">Sydney</Radio>
          <Radio value="san-francisco">San Francisco</Radio>
          <Radio value="london">London</Radio>
          <Radio value="tokyo">Tokyo</Radio>
        </RadioGroup>
      </CardBody>

      <Divider/>

      <CardFooter className="w-full md:w-10/12 mx-auto my-4 flex justify-end">
        <Button isDisabled color="primary" radius="sm">
          Next
          <BsFillPlayFill />
        </Button>
      </CardFooter>
    </Card>
  );
}
