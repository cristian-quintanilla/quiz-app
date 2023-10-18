import { Button, Card, CardBody, Divider } from '@nextui-org/react';
import { BsArrowRepeat } from 'react-icons/bs';

export const Stats = () => {
  return (
    <>
      <Card>
        <CardBody>
          <h2 className="text-center font-semibold text-2xl uppercase">
            These are your results. Keep going!
          </h2>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <h2 className="text-center font-semibold text-2xl">
            Grade: A+
          </h2>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <p className="text-center font-medium text-xl">Total Questions: 1</p>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <p className="text-center font-medium text-xl">Correct Answers: 1</p>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <p className="text-center font-medium text-xl">Score: 0%</p>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <p className="text-center font-medium text-xl">Time Taken: 0h 0m 2s</p>
        </CardBody>
      </Card>

      <Divider />

      <div className="w-full md:w-10/12 mx-auto my-4 flex">
        <Button color="primary" radius="sm">
          Play Again
          <BsArrowRepeat size={ 22 } />
        </Button>
      </div>
    </>
  );
}
