import styled from 'styled-components'

const StyledPost = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 10px;
  padding: 10px;
`
const Delete = styled.div`
 cursor: pointer;
 float: right;
`
const p = styled.p`
  font-weight: 200;
  font-size: 12px;
  margin-top: 20px;
`
function PostIt ({ text, onDelete }) {
  return (
    <StyledPost>
      <Delete onClick={onDelete}>x</Delete>
      <p>{text}</p>
    </StyledPost>
  )
}

PostIt.defaultProps = {
  text: '',
  onDelete: () => {}
}
export default PostIt