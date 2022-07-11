import React from 'react'
import { registro } from "./firebase"



export default function App() {
  function resolverRegistro(){
    
  }
  return (
    <div id="main">

      <div id="campos">
        <input placeholder='Email' />
        <input type="password" placeholder="Password"/>
      </div>

      <button onClick={resolverRegistro}>Enviar</button>
    </div>
  );
}
