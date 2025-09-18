import styled from 'styled-components'
import Vaga from '../../components/Vaga'

const Lista = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 24px;
`

export default function ListaVagas() {
  const vagas = [
    {
      titulo: 'Desenvolvedor Frontend',
      descricao:
        'Atuar com React, Styled Components e integrações com API REST',
      localizacao: 'Remoto'
    },
    {
      titulo: 'Desenvolvedor Backend',
      descricao: 'Node.js, Express e banco de dados MongoDB',
      localizacao: 'São Paulo'
    },
    {
      titulo: 'UI Designer',
      descricao: 'Figma, criação de interfaces responsivas e design system',
      localizacao: 'Rio de Janeiro'
    },
    {
      titulo: 'UX Researcher',
      descricao: 'Pesquisas com usuários, prototipagem e testes de usabilidade',
      localizacao: 'Remoto'
    }
  ]

  return (
    <Lista>
      {vagas.map((vaga, index) => (
        <Vaga
          key={index}
          titulo={vaga.titulo}
          descricao={vaga.descricao}
          localizacao={vaga.localizacao}
        />
      ))}
    </Lista>
  )
}
