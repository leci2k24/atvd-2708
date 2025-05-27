// Produto.js
function Produto(props) {
    return (
      <div>
        <h3>{props.nome}</h3>
        <p>Preço: R$ {props.preco}</p>
      </div>
    );
  }
  
  export default Produto;
  