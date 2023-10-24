import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Button, Card, CardBody, CardFooter, Chip, Divider, Radio, RadioGroup } from '@nextui-org/react';
import { BsFillPlayFill, BsFillCheckCircleFill } from 'react-icons/bs';

import { Grades } from '../types/grades';
import { RootState } from '../store/rootReducer';
import { joinArrayofStringsRandom } from '../helpers';
import { setCurrentStep, setResults, setUserAnswer } from '../store/slices';

interface FormInputs {
  answer: string;
}

export const CurrentQuestion = () => {
  const dispatch = useDispatch();
  const { timeExpired } = useSelector((state: RootState) => state.timer);
  const { currentQuestion: index, questions, totalQuestions } = useSelector((state: RootState) => state.questions);

  // Answers
  const [ answers, setAnswers ] = useState<string[]>([]);

  const { control, formState: { isValid }, handleSubmit, reset } = useForm<FormInputs>({
    defaultValues: {
      answer: '',
    }
  });

  useEffect(() => {
    setAnswers(
      joinArrayofStringsRandom([
        questions[index].correct_answer,
        ...questions[index].incorrect_answers,
      ])
    )
  }, [index]);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    reset();

    // Select user answer and go to next question
    dispatch(
      setUserAnswer({
        currentQuestion: index,
        answer: data.answer
      })
    );
  };

  const checkResults = () => {
    // Calculate stats
    const correctAnswers = questions.reduce((acc, question) => {
      if (question.correct_answer === question.user_answer) return acc + 1;
      return acc;
    }, 0);

    let grade: Grades = 'F';
    const score = Math.round((correctAnswers / totalQuestions) * 100);

    if (score < 100) grade = 'A';
    if (score < 90) grade = 'B';
    if (score < 80) grade = 'C';
    if (score < 70) grade = 'D';
    if (score < 60) grade = 'F';

    dispatch(
      setResults({
        grade,
        correctAnswers,
        score,
        totalQuestions,
      })
    );

    // Results screen
    dispatch( setCurrentStep(3) );
  }

  return (
    <form onSubmit={ handleSubmit( onSubmit ) }>
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

        <Controller
          control={ control }
          name="answer"
          rules={{ required: true }}
          render={({ field }) => (
            <RadioGroup
              label="Select your answer"
              color="primary"
              value={ field.value }
              onChange={ field.onChange }
            >
              {answers.map((option, index) => (
                <Radio key={ index } value={ option }>
                  <span dangerouslySetInnerHTML={{  __html: option }}></span>
                </Radio>
              ))}
            </RadioGroup>
          )}
        />
      </CardBody>

      <Divider />

      <CardFooter className="w-full md:w-10/12 mx-auto my-4 flex justify-end">
        {(!timeExpired && index + 1 === totalQuestions) && (
          <Button
            isDisabled={ !isValid }
            color="primary"
            radius="sm"
            onClick={ checkResults }
          >
            Check Results
            <BsFillCheckCircleFill size={ 22 } />
          </Button>
        )}

        {timeExpired && (
          <Button
            isDisabled={ !isValid }
            color="primary"
            radius="sm"
            onClick={ checkResults }
          >
            Check Results
            <BsFillCheckCircleFill size={ 22 } />
          </Button>
        )}

        {(!timeExpired && index + 1 !== totalQuestions) && (
          <Button isDisabled={ !isValid } type="submit" color="primary" radius="sm">
            Next
            <BsFillPlayFill size={ 22 } />
          </Button>
        )}
      </CardFooter>
    </form>
  );
}
