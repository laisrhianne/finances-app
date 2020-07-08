import React from 'react';
import { Container } from 'reactstrap';

export default function Monitoring({ transactions }) {
  let creditTransactions = transactions.filter(
    (transaction) => transaction.credit
  );
  let debitTransactions = transactions.filter(
    (transaction) => !transaction.credit
  );
  let saldo = saldoAtual(creditTransactions, debitTransactions);
  const data = new Date();
  let mesAtual = transactions.filter(
    (transaction) => transaction.month === data.getMonth()
  );
  console.log('mês atual:' + mesAtual);
  let credito = creditoMes(mesAtual);
  let debito = debitoMes(mesAtual);

  return (
    <Container style={styles.container}>
      <h3>Monitoramento</h3>
      <br />
      <fieldset style={styles.saldo}>
        <h4>Saldo atual</h4>
        <h5>R$ {saldo}</h5>
      </fieldset>

      <fieldset style={styles.mes}>
        <h4>Mês atual</h4>
        <h5>Crédito no mês: R$ {credito}</h5>
        <h5>Débito no mês: R$ {debito}</h5>
      </fieldset>
    </Container>
  );
}

function creditoMes(transactions) {
  const credito = transactions.filter((transaction) => transaction.credit);
  const soma = credito.reduce((ac, transaction) => ac + transaction.value, 0);
  return soma;
}

function debitoMes(transactions) {
  const debito = transactions.filter((transaction) => !transaction.credit);
  const soma = debito.reduce((ac, transaction) => ac + transaction.value, 0);
  return soma;
}

function saldoAtual(credit, debit) {
  const credito = credit.reduce((ac, transaction) => ac + transaction.value, 0);
  const debito = debit.reduce((ac, transaction) => ac - transaction.value, 0);
  const total = credito + debito;
  return total;
}

const styles = {
  container: {
    marginTop: 30,
    marginBottom: 30,
  },
  saldo: {
    borderStyle: 'dotted',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 3,
    marginBottom: 30,
  },
  mes: {
    borderStyle: 'dotted',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 3
  }
};
