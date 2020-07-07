import React from 'react';
import './App.css';
import { Container, Col, Row } from 'reactstrap';

function App() {
  return (
    <div className='App'>
      <Container
        className='themed-container'
        fluid={true}
        style={styles.container}
      >
        <Row>
          <Col sm='3' style={styles.monitoramento}>
            Monitoramento
            <br />
            Montante atual
            <br />
            Gastos no mês
            <br />
          </Col>
          <Col sm='6' style={styles.main}>
            Finanças
            <br />
            Adicionar crédito/débito
            <br />
            Histórico
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
    height: 657,
  },
  monitoramento: {
    backgroundColor: '#6DC5C7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
    marginLeft: 'auto',
    marginTop: 50,
    marginBottom: 50,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
  },
  main: {
    backgroundColor: '#C78F6D',
    marginRight: 'auto',
    marginLeft: 30,
    marginTop: 50,
    marginBottom: 50,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
  },
};

export default App;
