import React from 'react'
import { useRef } from 'react';
import { registro } from "./firebase"


// el registro sera async porque el registro sera devolvera una promesa 
export default function App() {
   
  const emailRef = useRef();
  const passwordRef = useRef();


  async function resolverRegistro(){

// asignamos campos de entrada a la referencia 
//emailRef.current.value optengo el valor actual de la referencia de entrada del correo y contraseña
await registro(emailRef.current.value, passwordRef.current.value);
  }
  return (
    <div id="main">

      <div id="campos">
        <input ref={emailRef} placeholder='Email' />
        <input ref={passwordRef} type="password" placeholder="Password"/>
      </div>

      <button onClick={resolverRegistro}>Enviar</button>
    </div>
  );
}
