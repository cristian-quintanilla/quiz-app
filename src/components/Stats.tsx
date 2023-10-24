import { Button, Card, CardBody, Divider } from '@nextui-org/react';
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowRepeat } from 'react-icons/bs';

import { RootState } from '../store/rootReducer';
import { resetQuestions, resetQuiz, resetTimer } from '../store/slices';

export const Stats = () => {
  const dispatch = useDispatch();
  const { grade, correctAnswers, score, totalQuestions } = useSelector((state: RootState) => state.quiz);

  const reset = () => {
    dispatch( resetQuiz() );
    dispatch( resetTimer() );
    dispatch( resetQuestions() );
  }

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
            Grade: { grade }
          </h2>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <p className="text-center font-medium text-xl">Total Questions: { totalQuestions }</p>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <p className="text-center font-medium text-xl">Correct Answers: { correctAnswers }</p>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <p className="text-center font-medium text-xl">Score: { score }%</p>
        </CardBody>
      </Card>

      <Divider />

      <div className="w-full md:w-10/12 mx-auto my-4 flex">
        <Button color="primary" radius="sm" onClick={ reset }>
          Play Again
          <BsArrowRepeat size={ 22 } />
        </Button>
      </div>
    </>
  );
}
