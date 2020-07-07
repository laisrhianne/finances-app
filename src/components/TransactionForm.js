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

export default function Transactionform(addTransaction) {
  const date = new Date();
  const [transaction, setTransaction] = useState({
    description: '',
    value: 0,
    credit: true, // informa se o valor é positivo (crédito) ou negativo (débito)
    month: date.getMonth(),
    day: date.getDate(),
  });

  function handleDay(event){
      setTransaction({
          day: event.target.value
      });
  }

  return (
    <Container>
      <h3>Adicionar transação</h3>
      <br />
      <Form>
        <Row style={styles.row}>
          <Col sm='6'>
            <FormGroup>
              <Label for='description'>Descrição</Label>
              <Input type='text' name='description' id='description' />
            </FormGroup>
          </Col>
          <Col sm='3'>
            <FormGroup>
              <Label for='value'>Valor</Label>
              <Input type='number' name='value' id='value' />
            </FormGroup>
          </Col>
        </Row>
        <Row style={styles.row}>
          <Col sm='3'>
            <Label>Mês</Label>
            <Input type='select'>
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
          <Col sm='2'>
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
            <Label style={styles.credit}>
              <Input type='radio' name='credit' value='true' />
              Crédito
            </Label>
            <br />
            <Label style={styles.debit}>
              <Input type='radio' name='credit' value='false' />
              Débito
            </Label>
          </Col>
        </Row>
        <Row style={styles.row}>
          <Button color='primary' style={styles.button}>
            Adicionar
          </Button>
        </Row>
      </Form>
    </Container>
  );
}

const styles = {
  container: {},
  check: {
    marginTop: 'auto',
    marginBottom: 'auto',
    paddingTop: 30,
  },
  credit: {
    backgroundColor: '#1CE65B',
    borderRadius: 5,
    width: 90,
    paddingLeft: 15,
  },
  debit: {
    backgroundColor: '#FF3B38',
    borderRadius: 5,
    width: 90,
    paddingLeft: 15,
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
