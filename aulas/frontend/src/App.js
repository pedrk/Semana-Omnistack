import React from 'react';
import './global.css'
import Routes from './Routes'
// JSX (JavaScript XML ) quando o html ta escrito no JavaScript

/* Exemplo de useState 
function App() {
  let [counter, setCounter]  = useState(0);
  
  //useState retorn uma Array:
  //Array [valor, funcaoAtualizaçãoDoValor]

  function increment() {
    setCounter(counter + 1)

    console.log(counter)
  } 
  */
function App() {
  return (
    <Routes />
  )
};
export default App;
