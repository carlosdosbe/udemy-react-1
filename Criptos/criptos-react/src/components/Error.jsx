import styled from "@emotion/styled";

const Texto = styled.div`
  background-color: #b7322c;
  color: #fff;
  font-size: 22px;
  padding: 15px;
  text-align: center;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-weight: 700;
`;

const Error = ({ children }) => {
  return <Texto>{children}</Texto>;
};

export default Error;
