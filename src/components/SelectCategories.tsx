import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Select,
  SelectItem,
} from '@nextui-org/react';
import { BsFillPlayFill } from 'react-icons/bs';

import {
  CATEGORIES,
  COUNTDOWN_TIME,
  DIFFICULTY,
  NUM_OF_QUESTIONS,
  QUESTIONS_TYPE,
} from '../constants';

export const SelectCategories = () => {
  return (
    <Card>
      <CardHeader className="flex gap-3">
        <Image
          width={ 42 }
          alt="GitHub"
          src="/faq.png"
        />

        <div className="flex flex-col">
          <p className="text-lg font-semibold">QuizApp</p>
          <p className="text-small text-default-500">Made by Cristian Quintanilla</p>
        </div>
      </CardHeader>

      <Divider/>

      <CardBody className="flex flex-col gap-6 w-full md:w-10/12 mx-auto my-6">
        <Select
          label="In which category do you want to play the quiz?"
          placeholder="Select a category"
        >
          {CATEGORIES.map(cat => (
            <SelectItem key={ cat.key } value={ cat.value }>
              { cat.text }
            </SelectItem>
          ))}
        </Select>

        <Select
          label="How many questions do you want in the quiz?"
          placeholder="Select a number"
        >
          {NUM_OF_QUESTIONS.map(cat => (
            <SelectItem key={ cat.key } textValue={ cat.value }>
              { cat.text }
            </SelectItem>
          ))}
        </Select>

        <Select
          label="How difficult do you want your quiz to be?"
          placeholder="Select a difficulty"
        >
          {DIFFICULTY.map(cat => (
            <SelectItem key={ cat.key } value={ cat.value }>
              { cat.text }
            </SelectItem>
          ))}
        </Select>

        <Select
          label="Which type of questions do you want in your quiz?"
          placeholder="Select a type"
        >
          {QUESTIONS_TYPE.map(cat => (
            <SelectItem key={ cat.key } value={ cat.value }>
              { cat.text }
            </SelectItem>
          ))}
        </Select>

        <div className="flex flex-col">
          <div className="px-3 py-2">
            <span className="block font-medium text-foreground-500 text-tiny">Timer</span>
          </div>

          <div className="flex flex-col md:flex-row gap-2">
            <Select
              label="Select hours"
              placeholder="Select hours"
              className="max-w-xs"
            >
              {COUNTDOWN_TIME.hours.map(cat => (
                <SelectItem key={ cat.key } textValue={ cat.value.toString() }>
                  { cat.text }
                </SelectItem>
              ))}
            </Select>

            <Select
              label="Select minutes"
              placeholder="Select minutes"
              className="max-w-xs"
            >
              {COUNTDOWN_TIME.minutes.map(cat => (
                <SelectItem key={ cat.key } textValue={ cat.value.toString() }>
                  { cat.text }
                </SelectItem>
              ))}
            </Select>

            <Select
              label="Select seconds"
              placeholder="Select seconds"
              className="max-w-xs"
            >
              {COUNTDOWN_TIME.seconds.map(cat => (
                <SelectItem key={ cat.key } textValue={ cat.value.toString() }>
                  { cat.text }
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
      </CardBody>

      <Divider/>

      <CardFooter className="w-full md:w-10/12 mx-auto my-4">
        <Button color="primary" radius="sm">
          Play Now
          <BsFillPlayFill />
        </Button>
      </CardFooter>
    </Card>
  );
}
