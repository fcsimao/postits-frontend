import styled from 'styled-components'

const StyledPost = styled.div`
  background-color: ${({ theme }) => theme.colors.cards};
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.white};
  height: 30px;
`
const Delete = styled.div`
 cursor: pointer;
 float: right;
`
const P = styled.p`
  font-weight: 200;
  font-size: 14px;
  margin-top: 5px;
`
function PostIt ({ text, onDelete }) {
  return (
    <StyledPost>
      <Delete onClick={onDelete}>x</Delete>
      <P>{text}</P>
    </StyledPost>
  )
}

PostIt.defaultProps = {
  text: '',
  onDelete: () => {}
}
export default PostIt