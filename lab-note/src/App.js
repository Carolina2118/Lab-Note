import React from 'react'
import { useRef, useState} from 'react';
import { registro, useAuth } from "./firebase"


// el registro sera async porque el registro sera devolvera una promesa 
export default function App() {
const [ loading, setLoaging] = useState(false);
  const usuarioActual = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();


  async function resolverRegistro() {
try{
    // asignamos campos de entrada a la referencia 
    //emailRef.current.value optengo el valor actual de la referencia de entrada del correo y contraseña
    setLoaging(true);
    await registro(emailRef.current.value, passwordRef.current.value);
} catch{
    alert("Error!") 
}
setLoaging(false);
  }
  return (
    <div id="main">

      <div>bienvenido a Creative Block: { usuarioActual.email}</div>
      <div id="campos">
        <input ref={emailRef} placeholder='Email' />
        <input ref={passwordRef} type="password" placeholder="Password" />
      </div>

      <button disabled={loading}  onClick={resolverRegistro}>Enviar</button>
    </div>
  );
}
