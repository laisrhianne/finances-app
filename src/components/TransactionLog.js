import React from 'react';
import { Container, Table } from 'reactstrap';
import TableItem from './TableItem';

export default function TransactionLog({ transactions }) {
  let listOfTransactions = [];
  if (transactions.length > 10) {
    listOfTransactions = transactions.slice(0, 9);
  } else {
    listOfTransactions = transactions;
  }

  return (
    <Container style={styles.container}>
      <h3>Histórico de transações</h3>
      <Table>
        <thead>
          <tr>
            <th>Dia</th>
            <th>Mês</th>
            <th>Descrição</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {listOfTransactions.map(transaction => {
            return (
              <TableItem transaction={transaction}  />
            )
          })}
        </tbody>
      </Table>
    </Container>
  );
}

const styles = {
  container: {
    marginTop: 30,
    marginBottom: 30,
  },
};
