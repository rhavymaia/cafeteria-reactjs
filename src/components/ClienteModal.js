import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const ClienteModal = ({ show, setShow, handleClose }) => {
  const [cliente, setCliente] = useState({});

  const handleChangeCadastrar = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCliente((values) => ({ ...values, [name]: value }));
    console.log(cliente);
  };

  async function createCliente() {
    let response = await fetch('http://localhost:3030/clientes', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(cliente),
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log('Danou-se');
      });
    let clienteData = await response.json();
    return clienteData;
  }

  const handleClickCadastrar = (event) => {
    console.log('Cadastrar');

    const temp = createCliente();

    // Cliente será enviado para o cadastro.

    console.log(
      temp.then((value) => {
        console.log(value);
      }),
    );
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                name="nome"
                controlid="nome"
                value={cliente.nome}
                onChange={handleChangeCadastrar}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                name="email"
                controlid="email"
                value={cliente.email}
                onChange={handleChangeCadastrar}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nascimento</Form.Label>
              <Form.Control
                type="date"
                name="nascimento"
                controlid="nascimento"
                value={cliente.nascimento}
                onChange={handleChangeCadastrar}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Limpar
            </Button>
            <Button variant="primary" onClick={handleClickCadastrar}>
              Cadastrar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default ClienteModal;
