import { useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';

import { RootState } from '../store/rootReducer';

export const QNA = () => {
  const { questions } = useSelector((state: RootState) => state.questions);

  console.log(questions);

  return (
    <Table aria-label="qna-tanle">
      <TableHeader>
        <TableColumn>No.</TableColumn>
        <TableColumn>Question</TableColumn>
        <TableColumn>Your Answer</TableColumn>
        <TableColumn>Correct Answer</TableColumn>
        <TableColumn>Points</TableColumn>
      </TableHeader>

      <TableBody>
        {questions.map(({ id, question, user_answer, correct_answer }, index) => (
          <TableRow key={ index }>
            <TableCell>{ id }</TableCell>
            <TableCell>{ question }</TableCell>
            <TableCell>{ user_answer }</TableCell>
            <TableCell>{ correct_answer }</TableCell>
            <TableCell>{ user_answer === correct_answer ? '1' : '0' }</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
