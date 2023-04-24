import styled from 'styled-components'
import Postit from './postit'
import Buttom from '../Buttons/button'

const StyleBoardColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  min-height: 300px;
  background-color: ${({ theme }) => theme.colors.white};
  border-top: 10px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  padding: 0 20px;
`
const H4 = styled.h4`
  font-weight: 500;
  font-size: 20px;
`
const BoardContent = styled.div`
  flex: 1;
`

function BoardColumn ({ title }) {
  return (
    <StyleBoardColumn>
      <H4>{title}</H4>
      <BoardContent>
        <Postit />
        <Postit />
      </BoardContent>
      <Buttom fullWidth variant='outlined'>Adicionar Card</Buttom>
    </StyleBoardColumn>
  )
}

BoardColumn.defaultProps = {
  title: 'Title Teste'
}

export default BoardColumn