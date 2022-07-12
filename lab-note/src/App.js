//import React from 'react'
import { useRef, useState } from 'react';
import { registro, cerrarSesion, useAuth } from "./firebase"


// el registro sera async porque el registro sera devolvera una promesa 
export default function App() {
  const [loading, setLoading] = useState(false);
  const usuarioActual = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  
  // asignamos campos de entrada a la referencia 
  //emailRef.current.value optengo el valor actual de la referencia de entrada del correo y contraseña
  async function resolverRegistro() {

    setLoading(true);

    try {
      await registro(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!")
    }
    setLoading(false);
  }

  async function cerrarRegistro (){
    setLoading(true);
    try {

      await cerrarSesion();
    } catch{
      alert("Error!");      
    }
    setLoading(false);    
  }

  return (
    <div id="main">

      <div>bienvenido a Creative Block: { usuarioActual?.email } </div>

      <div id="campos">

        <input ref={emailRef} placeholder='Email' />
        <input ref={passwordRef} type="password" placeholder="Password" />

      </div>

      <button disabled={ loading || usuarioActual }onClick={resolverRegistro}>Enviar</button>
      <button disabled={ loading || !usuarioActual }onClick={cerrarRegistro}> cerrar sesión</button>


    </div>
  );
}