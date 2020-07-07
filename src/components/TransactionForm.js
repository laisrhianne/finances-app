import React, { useState } from 'react';
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Input,
  Label,
  FormGroup,
} from 'reactstrap';

export default function Transactionform({ addTransaction, toggleModal }) {
  const date = new Date();
  const [transaction, setTransaction] = useState({
    description: '',
    value: 0,
    credit: true, // informa se o valor é positivo (crédito) ou negativo (débito)
    month: date.getMonth(),
    day: date.getDate(),
  });

  function handleDay(event) {
    setTransaction({
      day: event.target.value,
    });
  }

  function handleMonth(event) {
    setTransaction({
      month: event.target.value,
    });
  }

  function handleCredit(event) {
    setTransaction({
      credit: event.target.value,
    });
  }

  function handleDescription(event) {
    setTransaction({
      description: event.target.value,
    });
  }

  function handleValue(event) {
    setTransaction({
      value: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    addTransaction({...transaction});
    toggleModal();
  }

  return (
    <Container style={styles.container}>
      <Form onSubmit={handleSubmit}>
        <Row style={styles.row}>
          <Col sm='6'>
            <FormGroup>
              <Label for='description'>Descrição</Label>
              <Input
                type='text'
                name='description'
                id='description'
                onChange={handleDescription}
              />
            </FormGroup>
          </Col>
          <Col sm='3'>
            <FormGroup>
              <Label for='value'>Valor</Label>
              <Input
                type='number'
                name='value'
                id='value'
                onChange={handleValue}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row style={styles.row}>
          <Col sm='3'>
            <Label>Mês</Label>
            <Input
              type='select'
              value={transaction.month}
              onChange={handleMonth}
            >
              <option value='0'>Janeiro</option>
              <option value='1'>Fevereiro</option>
              <option value='2'>Março</option>
              <option value='3'>Abril</option>
              <option value='4'>Maio</option>
              <option value='5'>Junho</option>
              <option value='6'>Julho</option>
              <option value='7'>Agosto</option>
              <option value='8'>Setembro</option>
              <option value='9'>Outubro</option>
              <option value='10'>Novembro</option>
              <option value='11'>Dezembro</option>
            </Input>
          </Col>
          <Col sm='3'>
            <Label>Dia</Label>
            <Input
              type='number'
              min='1'
              max='31'
              value={transaction.day}
              onChange={handleDay}
            />
          </Col>
          <Col sm='3' style={styles.check}>
            <FormGroup check>
              <Label style={styles.credit}>
                <Input
                  type='radio'
                  name='credit'
                  value='true'
                  onChange={handleCredit}
                  checked='true'
                />
                Crédito
              </Label>
              <br />
              <Label style={styles.debit}>
                <Input
                  type='radio'
                  name='credit'
                  value='false'
                  onChange={handleCredit}
                />
                Débito
              </Label>
            </FormGroup>
          </Col>
        </Row>
        <Row style={styles.row}>
          <Button color='primary' style={styles.button} type='submit'>
            Adicionar
          </Button>
        </Row>
      </Form>
    </Container>
  );
}

const styles = {
  container: {
      paddingTop: 20,
      paddingBottom: 20,
  },
  check: {
    marginTop: 'auto',
    marginBottom: 'auto',
    paddingTop: 30,
  },
  credit: {
    backgroundColor: '#1CE65B',
    borderRadius: 5,
    width: 90,
    paddingLeft: 25,
  },
  debit: {
    backgroundColor: '#FF3B38',
    borderRadius: 5,
    width: 90,
    paddingLeft: 25,
  },
  row: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
  },
};
