import styled from 'styled-components'

const VagaContainer = styled.div`
  background: #fff;
  border: 1px solid #eee;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 16px;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  }
`

const Titulo = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
`

const Descricao = styled.p`
  font-size: 14px;
  color: #555;
`

const Localizacao = styled.p`
  font-size: 13px;
  color: #888;
`

export default function Vaga({
  titulo,
  descricao,
  localizacao
}: {
  titulo: string
  descricao: string
  localizacao: string
}) {
  return (
    <VagaContainer>
      <Titulo>{titulo}</Titulo>
      <Descricao>{descricao}</Descricao>
      <Localizacao>{localizacao}</Localizacao>
    </VagaContainer>
  )
}
