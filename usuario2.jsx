// App.js
import React from 'react';
import Usuario from '/Usuario';

function App() {
  return (
    <div>
      <Usuario nome="Maria" idade={25} cidade="São Paulo" />
      <Usuario nome="Carlos" idade={32} cidade="Florianópolis" />
    </div>
  );
}

export default App;
