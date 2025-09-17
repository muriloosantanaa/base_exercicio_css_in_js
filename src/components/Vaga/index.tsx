import styled from 'styled-components';

const VagaCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 8px;
  background-color: #fff;
`;

interface VagaProps {
  titulo: string;
  empresa: string;
}

const Vaga: React.FC<VagaProps> = ({ titulo, empresa }) => (
  <VagaCard>
    <h3>{titulo}</h3>
    <p>{empresa}</p>
  </VagaCard>
);

export default Vaga;
