import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";
import Error from "./Error";

const InputSubmit = styled.input`
  background-color: #93b3ec;
  border: none;
  color: #fff;
  font-weight: 700;
  padding: 10px;
  text-transform: uppercase;
  width: 100%;
  border-radius: 10px;
  font-size: 20px;
  transition: all 0.3s ease;
  margin-top: 25px;

  &:hover {
    background-color: #4e78e2;
    cursor: pointer;
  }
`;

const Mensaje = styled.div`
  position: absolute;
  background: rgba(218, 85, 85, 1);
  top: 10px;
  right: 10px;
  padding: 25px;
  border-radius: 35px;
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  transition: 0.5s ease;
`;

const Formulario = () => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas);
  const [criptomoneda, SelectCriptomonedas] = useSelectMonedas(
    "Elige tu moneda Criptomoneda",
    criptos
  );

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD";

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const arrayCriptos = resultado.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };
        return objeto;
      });
      setCriptos(arrayCriptos);
    };

    consultarAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([moneda, criptomoneda].includes("")) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 2500);
      return;
    }
  };

  return (
    <>
      {error && (
        <div>
          <Mensaje>Todos los campos son necesarios</Mensaje>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptomonedas />

        <InputSubmit type="submit" value="Consultar" />
      </form>
    </>
  );
};

export default Formulario;
