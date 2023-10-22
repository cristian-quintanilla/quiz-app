import { useSelector } from 'react-redux';
import { Button, Card, CardBody, CardFooter, Chip, Divider, Radio, RadioGroup } from '@nextui-org/react';
import { BsFillPlayFill, BsFillCheckCircleFill } from 'react-icons/bs';

import { RootState } from '../store/rootReducer';
import { joinArrayofStringsRandom } from '../helpers';

export const CurrentQuestion = () => {
  const { timeExpired } = useSelector((state: RootState) => state.timer);
  const { currentQuestion: index, questions } = useSelector((state: RootState) => state.questions);
  const options = joinArrayofStringsRandom([
    questions[index].correct_answer,
    ...questions[index].incorrect_answers,
  ]);

  return (
    <>
      <CardBody className="flex flex-col gap-6 w-full md:w-11/12 mx-auto my-4">
        <Card>
          <CardBody>
            <Chip className="mb-2" color="primary" variant="flat">
              { questions[index].category }
            </Chip>

            <div
              className="font-semibold text-2xl"
              dangerouslySetInnerHTML={{  __html: questions[index].question }}
            ></div>
          </CardBody>
        </Card>

        <RadioGroup
          label="Select your answer"
          color="primary"
        >
          {options.map((option, index) => (
            <Radio key={ index } value={ option }>{ option }</Radio>
          ))}
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
