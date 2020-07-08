import React, { useState } from 'react';
import './App.css';
import {
  Container,
  Col,
  Row,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
import TransactionForm from './components/TransactionForm';
import TransactionLog from './components/TransactionLog';
import Monitoring from './components/Monitoring';

function App() {
  const [transactions, setTransactions] = useState([]);

  function addTransaction(transaction) {
    setTransactions([transaction, ...transactions]);
  }

  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }

  return (
    <div className='App'>
      <Container
        className='themed-container'
        fluid={true}
        style={styles.container}
      >
        <Row>
          <Col sm='3' style={styles.monitoramento}>
            <Monitoring transactions={transactions} />
          </Col>
          <Col sm='6' style={styles.main}>
            <TransactionLog transactions={transactions} />
            <Button color='primary' onClick={toggleModal}>
              Adicionar Transação
            </Button>
            <Modal isOpen={modal} toggle={toggleModal}>
              <ModalHeader toggle={toggleModal}>
                Adicionar Transação
              </ModalHeader>
              <ModalBody>
                <TransactionForm
                  addTransaction={addTransaction}
                  toggleModal={toggleModal}
                />
              </ModalBody>
            </Modal>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#282c34',
    height: '100vh',
  },
  monitoramento: {
    backgroundColor: '#6DC5C7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 'auto',
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
    marginLeft: 'auto',
    marginTop: 50,
    marginBottom: 50,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
  },
};

export default App;
