import { Button, CardBody, CardFooter, Divider, Select, SelectItem } from '@nextui-org/react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { BsFillPlayFill } from 'react-icons/bs';

import {
  CATEGORIES,
  COUNTDOWN_TIME,
  DIFFICULTY,
  NUM_OF_QUESTIONS,
  QUESTIONS_TYPE,
} from '../constants';

interface FormInputs {
  amount: number;
  category: string;
  difficulty: string;
  type: string;
  hours: number;
  minutes: number;
  seconds: number;
}

export const QuestionsForm = () => {
  const { control, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      amount: 1,
      category: '0',
      difficulty: '0',
      type: '0',
      hours: 0,
      minutes: 10,
      seconds: 0,
    }
  });

  const onSubmit: SubmitHandler<FormInputs> = data => {
    console.log(data);
  };

  return (
    <form onSubmit={ handleSubmit( onSubmit ) }>
      <CardBody className="flex flex-col gap-6 w-full md:w-10/12 mx-auto my-6">
        <Controller
          control={ control }
          name="category"
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              label="In which category do you want to play the quiz?"
              placeholder="Select a category"
              defaultSelectedKeys={['0']}
              value={ field.value }
              onChange={ field.onChange }
            >
              {CATEGORIES.map(cat => (
                <SelectItem key={ cat.key } value={ cat.value }>
                  { cat.text }
                </SelectItem>
              ))}
            </Select>
          )}
        />

        <Controller
          control={ control }
          name="amount"
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              label="How many questions do you want in the quiz?"
              placeholder="Select a number"
              defaultSelectedKeys={['1']}
              value={ field.value }
              onChange={e => field.onChange(+e.target.value)}
            >
              {NUM_OF_QUESTIONS.map(cat => (
                <SelectItem key={ cat.key } textValue={ cat.value }>
                  { cat.text }
                </SelectItem>
              ))}
            </Select>
          )}
        />

        <Controller
          control={ control }
          name="difficulty"
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              label="How difficult do you want your quiz to be?"
              placeholder="Select a difficulty"
              defaultSelectedKeys={['0']}
              value={ field.value }
              onChange={ field.onChange }
            >
              {DIFFICULTY.map(cat => (
                <SelectItem key={ cat.key } value={ cat.value }>
                  { cat.text }
                </SelectItem>
              ))}
            </Select>
          )}
        />

        <Controller
          control={ control }
          name="type"
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              label="Which type of questions do you want in your quiz?"
              placeholder="Select a type"
              defaultSelectedKeys={['0']}
              value={ field.value }
              onChange={ field.onChange }
            >
              {QUESTIONS_TYPE.map(cat => (
                <SelectItem key={ cat.key } value={ cat.value }>
                  { cat.text }
                </SelectItem>
              ))}
            </Select>
          )}
        />

        <div className="flex flex-col">
          <div className="px-3 py-2">
            <span className="block font-medium text-foreground-500 text-tiny">Timer</span>
          </div>

          <div className="flex flex-col md:flex-row gap-2">
            <Controller
              control={ control }
              name="hours"
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  label="Select hours"
                  placeholder="Select hours"
                  className="max-w-xs"
                  defaultSelectedKeys={['0']}
                  value={ field.value }
                  onChange={e => field.onChange(+e.target.value)}
                >
                  {COUNTDOWN_TIME.hours.map(cat => (
                    <SelectItem key={ cat.key } textValue={ cat.value.toString() }>
                      { cat.text }
                    </SelectItem>
                  ))}
                </Select>
              )}
            />

            <Controller
              control={ control }
              name="minutes"
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  label="Select minutes"
                  placeholder="Select minutes"
                  className="max-w-xs"
                  defaultSelectedKeys={['10']}
                  value={ field.value }
                  onChange={e => field.onChange(+e.target.value)}
                >
                  {COUNTDOWN_TIME.minutes.map(cat => (
                    <SelectItem key={ cat.key } textValue={ cat.value.toString() }>
                      { cat.text }
                    </SelectItem>
                  ))}
                </Select>
              )}
            />

            <Controller
              control={ control }
              name="seconds"
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  label="Select seconds"
                  placeholder="Select seconds"
                  className="max-w-xs"
                  defaultSelectedKeys={['0']}
                  value={ field.value }
                  onChange={e => field.onChange(+e.target.value)}
                >
                  {COUNTDOWN_TIME.seconds.map(cat => (
                    <SelectItem key={ cat.key } textValue={ cat.value.toString() }>
                      { cat.text }
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
          </div>
        </div>
      </CardBody>

      <Divider />

      <CardFooter className="w-full md:w-10/12 mx-auto my-4">
        <Button type="submit" color="primary" radius="sm">
          Play Now
          <BsFillPlayFill size={ 22 } />
        </Button>
      </CardFooter>
    </form>
  );
}
