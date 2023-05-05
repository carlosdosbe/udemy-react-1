import { useState } from "react";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import ImagenCripto from "./img/bitcoin-y-critomonedas-101-2.webp";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  color: #41403e;
  text-align: center;
  font-weight: 700;
  margin-top: 100px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

function App() {
  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt="imagen" />
      <div>
        <Heading>Precios criptomonedas</Heading>
        <Formulario />
      </div>
    </Contenedor>
  );
}

export default App;
