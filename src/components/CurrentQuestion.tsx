import { useSelector } from 'react-redux';
import { Button, Card, CardBody, CardFooter, Divider, Radio, RadioGroup } from '@nextui-org/react';
import { BsFillPlayFill, BsFillCheckCircleFill } from 'react-icons/bs';

import { RootState } from '../store/rootReducer';

export const CurrentQuestion = () => {
  const { timeExpired } = useSelector((state: RootState) => state.timer);

  return (
    <>
      <CardBody className="flex flex-col gap-6 w-full md:w-11/12 mx-auto my-4">
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
        >
          <Radio value="buenos-aires">Buenos Aires</Radio>
          <Radio value="sydney">Sydney</Radio>
          <Radio value="san-francisco">San Francisco</Radio>
          <Radio value="london">London</Radio>
          <Radio value="tokyo">Tokyo</Radio>
        </RadioGroup>
      </CardBody>

      <Divider />

      <CardFooter className="w-full md:w-10/12 mx-auto my-4 flex justify-end">
        {
          !timeExpired ? (
            <Button isDisabled color="primary" radius="sm">
              Next
              <BsFillPlayFill size={ 22 } />
            </Button>
          ) : (
            <Button color="primary" radius="sm">
              Check Results
              <BsFillCheckCircleFill size={ 22 } />
            </Button>
          )
        }
      </CardFooter>
    </>
  );
}
