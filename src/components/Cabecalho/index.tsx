import styled from 'styled-components';

// Criamos o componente estilizado
const CabecalhoContainer = styled.header`
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

const Cabecalho = () => (
  <CabecalhoContainer>
    <h1>EBAC Jobs</h1>
  </CabecalhoContainer>
);

export default Cabecalho;
