// App.js
import React from 'react';
import Produto from '/Produto';

function App() {
  const listaDeProdutos = [
    { id: 1, nome: 'Notebook', preco: 3500 },
    { id: 2, nome: 'Mouse', preco: 150 },
    { id: 3, nome: 'Teclado', preco: 200 },
    { id: 4, nome: 'Monitor', preco: 1200 },
  ];

  return (
    <div>
      <h2>Lista de Produtos</h2>
      {listaDeProdutos.map((item) => (
        <Produto key={item.id} nome={item.nome} preco={item.preco} />
      ))}
    </div>
  );
}

export default App;
