import { Button, Card, CardBody, Divider, Tab, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tabs } from '@nextui-org/react';
import { BsArrowRepeat } from 'react-icons/bs';

export const Results = () => {
  return (
    <Card>
      <CardBody>
        <Tabs fullWidth size="lg">
          <Tab key="stats" title="Stats" className="flex flex-col gap-4">
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
          </Tab>

          <Tab key="answers" title="Question and Answers">
            <Table aria-label="qna-tanle">
              <TableHeader>
                <TableColumn>No.</TableColumn>
                <TableColumn>Question</TableColumn>
                <TableColumn>Your Answer</TableColumn>
                <TableColumn>Correct Answer</TableColumn>
                <TableColumn>Points</TableColumn>
              </TableHeader>

              <TableBody>
                <TableRow key="1">
                  <TableCell>1</TableCell>
                  <TableCell>Half-Life by Valve uses the GoldSrc game engine, which is a highly modified version of what engine?</TableCell>
                  <TableCell>Source Engine</TableCell>
                  <TableCell>Quake Engine</TableCell>
                  <TableCell>0</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Tab>
        </Tabs>
      </CardBody>
    </Card>
  );
}
