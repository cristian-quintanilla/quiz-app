import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';

export const QNA = () => {
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
        <TableRow key="1">
          <TableCell>1</TableCell>
          <TableCell>Half-Life by Valve uses the GoldSrc game engine, which is a highly modified version of what engine?</TableCell>
          <TableCell>Source Engine</TableCell>
          <TableCell>Quake Engine</TableCell>
          <TableCell>0</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
