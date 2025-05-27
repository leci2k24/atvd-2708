// TextoControlado.js
import React, { useState } from 'react';

function TextoControlado() {
  const [inputTexto, setInputTexto] = useState('');
  const [titulo, setTitulo] = useState('Título padrão');

  const exibirTexto = () => {
    setTitulo(inputTexto);
  };

  return (
    <div>
      <input
        type="text"
        value={inputTexto}
        onChange={(e) => setInputTexto(e.target.value)}
        placeholder="Digite algo"
      />
      <button onClick={exibirTexto}>Exibir</button>
      <h1>{titulo}</h1>
    </div>
  );
}

export default TextoControlado;
