import React from 'react';
import './App.css';
import { Container, Col, Row } from 'reactstrap';

function App() {
  return (
    <div className='App'>
      <Container className='themed-container' fluid={true} style={styles.container}>
        <Row>
          <Col sm='3' style={styles.monitoramento}>Teste1</Col>
          <Col sm='6' style={styles.main}>Teste2</Col>
          {/* <Col sm='2' style={styles.monitoramento}>Teste3</Col> */}
        </Row>
      </Container>
    </div>
  );
}

const styles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  monitoramento: {
    backgroundColor: 'blue',
    marginRight: 30,
    marginLeft: 'auto',
    borderRadius: 10,
  },
  main: {
    backgroundColor: 'yellow',
    marginRight: 'auto',
    marginLeft: 30,
    borderRadius: 10,
  }
}

export default App;
