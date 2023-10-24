import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';

import { QNA, Stats } from '../components';

export const Results = () => {
  return (
    <Card>
      <CardBody>
        <Tabs fullWidth size="lg">
          <Tab key="stats" title="Stats" className="flex flex-col gap-4">
            <Stats />
          </Tab>

          <Tab key="answers" title="Question and Answers">
            <QNA />
          </Tab>
        </Tabs>
      </CardBody>
    </Card>
  );
}
