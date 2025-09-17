import styled from 'styled-components';

const HeroContainer = styled.section`
  background-color: #e0e0e0;
  padding: 40px 20px;
  text-align: center;
`;

const Hero = () => (
  <HeroContainer>
    <h2>Encontre a vaga perfeita para você!</h2>
  </HeroContainer>
);

export default Hero;
