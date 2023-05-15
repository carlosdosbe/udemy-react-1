import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import ImagenCripto from "./img/bitcoin-y-critomonedas-101-2.webp";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

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

const ContenedorResultado = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  background-color: #c5c8cf;
  padding: 25px;
  margin-top: 35px;
  border-radius: 25px;
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
  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      setResultado({});
      const cotizarCripto = async () => {
        setCargando(true);
        const { moneda, criptomoneda } = monedas;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setResultado(resultado.DISPLAY[criptomoneda][moneda]);
        //const api = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";
        setCargando(false);
      };
      cotizarCripto();
    }
  }, [monedas]);

  return (
    <>
      <Contenedor>
        <Imagen src={ImagenCripto} alt="imagen" />
        <div>
          <Heading>Precios criptomonedas</Heading>
          <Formulario setMonedas={setMonedas} />
        </div>
      </Contenedor>

      {cargando && (
        <ContenedorResultado>
          <Spinner />
        </ContenedorResultado>
      )}
      {resultado.PRICE && (
        <ContenedorResultado>
          <Resultado resultado={resultado} />
        </ContenedorResultado>
      )}
    </>
  );
}

export default App;
