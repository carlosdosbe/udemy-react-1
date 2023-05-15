import styled from "@emotion/styled";

const ContenedorCripto = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: "Lato", sans-serif;
`;

const CriptoHeader = styled.div`
  display: flex;
  align-items: center;
`;

const CriptoHeaderTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 1.2rem;
  font-weight: 700;
`;

const ImagenCripto = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

const CriptoCaracteristica = styled.p`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #93b3ec;
  padding: 10px 35px;
  border-radius: 35px;
  flex-basis: 30%;
`;

const CriptoCaracteristicaValor = styled.span`
  font-weight: 700;
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <ContenedorCripto>
      <CriptoHeader>
        <CriptoHeaderTitle>
          Cripto:{" "}
          <ImagenCripto
            src={`https://cryptocompare.com/${IMAGEURL}`}
            alt="IMAGEN"
          />
        </CriptoHeaderTitle>
      </CriptoHeader>
      <CriptoCaracteristica>
        El precio es de:{" "}
        <CriptoCaracteristicaValor>{PRICE}</CriptoCaracteristicaValor>
      </CriptoCaracteristica>
      <CriptoCaracteristica>
        El precio mas alto del dia es de:{" "}
        <CriptoCaracteristicaValor>{HIGHDAY}</CriptoCaracteristicaValor>
      </CriptoCaracteristica>
      <CriptoCaracteristica>
        El precio mas bajo del dia es de:{" "}
        <CriptoCaracteristicaValor>{LOWDAY}</CriptoCaracteristicaValor>
      </CriptoCaracteristica>
      <CriptoCaracteristica>
        La variacion ultimas 24 hrs es de:{" "}
        <CriptoCaracteristicaValor>{CHANGEPCT24HOUR}</CriptoCaracteristicaValor>
      </CriptoCaracteristica>
      <CriptoCaracteristica>
        Ultima actualizacion:{" "}
        <CriptoCaracteristicaValor>{LASTUPDATE}</CriptoCaracteristicaValor>
      </CriptoCaracteristica>
    </ContenedorCripto>
  );
};

export default Resultado;
