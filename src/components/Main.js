import React, { useState } from 'react';

const itens = ['maçã', 'laranja', 'kiwi', 'pitaya', 'mirtilo'];

const Main = () => {
  //let quantidade = 0;
  const [quantidade, setQuantidade] = useState(0);

  let [frutas, setFrutas] = useState(itens);

  function handleClickIncrementar(event) {
    //setQuantidade(quantidade + 1);
    setQuantidade((valor) => {
      return valor + 1;
    });
  }

  // const handleClickAdicionar = function () {}
  const handleClickAdicionar = (event) => {
    setFrutas([...frutas, 'Pera']);
  };

  return (
    <main>
      Quantidade: {quantidade}
      <button onClick={handleClickIncrementar}>Incrementar</button>
      <ol>
        {frutas.map((fruta) => {
          return <li>{fruta}</li>;
        })}
      </ol>
      <button onClick={handleClickAdicionar}>Adicionar</button>
    </main>
  );
};

export default Main;
