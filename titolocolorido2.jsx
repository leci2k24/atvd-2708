// App.js
import React from 'react';
import TituloColorido from '/TituloColorido';

function App() {
  return (
    <div>
      <TituloColorido cor="blue" />
      <TituloColorido cor="green" />
      <TituloColorido cor="#FF5733" />
    </div>
  );
}

export default App;
