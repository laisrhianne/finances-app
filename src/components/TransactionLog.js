import React from 'react';
import { Container, Table } from 'reactstrap';

export default function TransactionLog({ transactions }) {
  let listOfTransactions = [];
  if (transactions.length > 10) {
    listOfTransactions = transactions.slice(0, 9);
  } else {
    listOfTransactions = transactions;
  }

  function renderTable() {
    if (listOfTransactions) {
      return listOfTransactions.map((transaction) => {
        return (
          <tr
            style={{
              backgroundColor: transaction.credit ? '#1CE65B' : '#FF3B38',
            }}
          >
            <td>{transaction.day}</td>
            <td>{transaction.month}</td>
            <td>{transaction.description}</td>
            <td>{transaction.value}</td>
          </tr>
        );
      });
    }
  }

  return (
    <Container style={styles.container}>
      <h3>Log de transações</h3>
      <Table>
        <thead>
          <tr>
            <th>Dia</th>
            <th>Mês</th>
            <th>Descrição</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>{renderTable}</tbody>
      </Table>
    </Container>
  );
}

const styles = {
  container: {
    marginTop: 30,
  },
};
