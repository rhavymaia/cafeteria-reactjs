import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const Clientes = () => {
  const [nome, setNome] = useState('');

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/clientes', { method: 'GET' })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // Resultado da busca.
        setClientes(data);
      })
      .catch((error) => {});
  }, []);

  const handleChange = (event) => {
    setNome(event.target.value);
  };

  const handleClick = (event) => {
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

  return (
    <div>
      <h1>Clientes</h1>
      <form>
        <input type="text" id="" value={nome} onChange={handleChange} />
        <Button variant="primary" onClick={handleClick}>
          Buscar
        </Button>
      </form>

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
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Clientes;
