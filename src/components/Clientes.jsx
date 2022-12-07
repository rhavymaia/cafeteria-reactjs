import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Clientes = () => {
  const [nome, setNome] = useState('');

  const handleChange = (event) => {
    setNome(event.target.value);
    console.log(nome);
  };

  const handleClick = (event) => {
    // fetch('http://localhost:3030/clientes', {})
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log('Resposta com insucesso!');
    //   })
    //   .finally();

    const cliente = {
      nome: 'Euridyce Karla',
      email: 'ek@mail.com',
      nascimento: '2022-01-01',
    };

    fetch('http://localhost:3030/clientes', {
      method: 'POST',
      body: JSON.stringify(cliente),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        console.log('Cadastrou!');
      })
      .catch((error) => {
        console.log('Falhou!');
      });
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
    </div>
  );
};

export default Clientes;
