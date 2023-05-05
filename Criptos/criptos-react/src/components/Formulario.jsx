import React from "react";
import styled from "@emotion/styled";

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

  &:hover {
    background-color: #4e78e2;
    cursor: pointer;
  }
`;

const Formulario = () => {
  return (
    <form>
      <InputSubmit type="submit" value="Consultar" />
    </form>
  );
};

export default Formulario;
