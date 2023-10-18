import { Card, CardBody, Radio, RadioGroup } from '@nextui-org/react';

export const CurrentQuestion = () => {
  return (
    <>
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
    </>
  );
}
