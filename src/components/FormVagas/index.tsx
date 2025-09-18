import styled from 'styled-components'

const Form = styled.form`
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
`

const Input = styled.input`
  padding: 8px;
  margin-right: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

const Botao = styled.button`
  padding: 8px 12px;
  background-color: #61dafb;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #21a1f1;
    color: #fff;
  }
`

export default function FormVagas() {
  return (
    <Form>
      <input type="text" placeholder="Digite o título da vaga" />
      <Botao>Pesquisar</Botao>
    </Form>
  )
}
