import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";

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

const Formulario = () => {
  const [criptos, setCriptos] = useState([]);
  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas);

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

  return (
    <form>
      <SelectMonedas />
      {moneda}
      <InputSubmit type="submit" value="Consultar" />
    </form>
  );
};

export default Formulario;
