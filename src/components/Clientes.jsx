import React, { useEffect, useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import ClienteModal from './ClienteModal';
import api from '../services/api';

const Clientes = () => {
  const [nome, setNome] = useState('');

  const [clientes, setClientes] = useState([]);

  const [show, setShow] = useState(false);

  // Adicioanar referência ao botão de adicionar (+).
  const adicionarButton = useRef(null);

  useEffect(() => {
    const loadClientes = async () => {
      // tem a opção de usar o .then() por retornar a promisse.
      const data = await api.readAll();
      setClientes((c) => [...c, ...data]);
    };

    loadClientes();
  }, []);

  const handleShow = () => setShow(!show);

  const handleChangeBuscar = (event) => {
    setNome(event.target.value);
  };

  const handleClickBuscar = (event) => {
    fetch(`http://localhost:3030/clientes?q=${nome}`, { method: 'GET' })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setClientes(data);
      })
      .catch((error) => {
        console.log('Resposta com insucesso!');
      })
      .finally();
  };

  const handleClickAdicionar = (event) => {
    setShow(true);

    adicionarButton.current.blur();
  };

  return (
    <div>
      <Container>
        <h1 className="text-center">Clientes</h1>
        <Button
          className="my-1 float-end"
          variant="dark"
          onClick={handleClickAdicionar}
          ref={adicionarButton}
        >
          +
        </Button>

        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o nome do cliente"
              name="nome"
              controlid="nome"
              value={nome}
              onChange={handleChangeBuscar}
            />
          </Form.Group>

          <Button
            className="mb-1"
            variant="primary"
            onClick={handleClickBuscar}
          >
            Buscar
          </Button>
        </Form>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Nascimento</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => {
              return (
                <tr key={cliente.id}>
                  <td>{cliente.id}</td>
                  <td>{cliente.nome}</td>
                  <td>{cliente.email}</td>
                  <td>{cliente.nascimento}</td>
                </tr>
              );
            }) || ''}
          </tbody>
        </Table>
      </Container>

      <ClienteModal
        show={show}
        handleShow={handleShow}
        clientes={clientes}
        setClientes={clientes}
      />
    </div>
  );
};

export default Clientes;
