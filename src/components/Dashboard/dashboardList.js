import styled from 'styled-components'
import BoardName from '../Cards/boardName'
const StyledBoardList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 80px:
`
function BoardList ({ boards }) {
  return (
    <StyledBoardList>
      {
        boards.map(({ _id, name, assunto, updatedDate }) => 
          <BoardName key={`board-${_id}`} id={_id} name={name} assunto={assunto} updated={updatedDate} />
        )
      }
    </StyledBoardList>
  )
}

BoardList.defaultProps = {
  boards: []
}

export default BoardList