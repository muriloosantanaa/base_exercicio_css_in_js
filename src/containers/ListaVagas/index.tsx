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
      titulo: 'Frontend Developer',
      descricao: 'React, Styled Components',
      localizacao: 'Remoto'
    },
    {
      titulo: 'Backend Developer',
      descricao: 'Node.js, Express e MongoDB',
      localizacao: 'São Paulo'
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
