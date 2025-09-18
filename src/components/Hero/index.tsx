import styled from 'styled-components'

const HeroContainer = styled.section`
  background-color: #61dafb;
  padding: 40px 20px;
  text-align: center;
  color: #282c34;
`

const Titulo = styled.h1`
  font-size: 32px;
  margin-bottom: 12px;
`

const Subtitulo = styled.p`
  font-size: 18px;
`

export default function Hero() {
  return (
    <HeroContainer>
      <Titulo>
        As melhores vagas para tecnologia, design e artes visuais.
      </Titulo>
      <Subtitulo>Encontre a oportunidade perfeita para você</Subtitulo>
    </HeroContainer>
  )
}
