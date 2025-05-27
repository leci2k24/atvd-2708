// TituloColorido.js
function TituloColorido(props) {
    const estilo = {
      color: props.cor,
    };
  
    return <h1 style={estilo}>Este é um título colorido!</h1>;
  }
  
  export default TituloColorido;
  