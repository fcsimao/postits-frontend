import { useState } from 'react'
import styled from 'styled-components'
import Input from '../Inputs/input'
import Button from '../Buttons/button' 

const StyledForm = styled.form`
  display: flex;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`
const InputSpacing = styled.div`
  margin-right: 20px;
`

function newBoard ({ onCreate }) {
  const [boardName, setBoardName] = useState('')
  const handleSubmitNewForm = (e) => {
    e.preventDefault()
    onCreate(boardName)
    setBoardName('')
  }
  return (
    <StyledForm onSubmit={handleSubmitNewForm}>
      <InputSpacing>
        <Input 
        type="text" 
        placeholder="Nome do Quadro" 
        required
        value={boardName}
        onChange={({ target }) => setBoardName(target.value)} 
      />
      </InputSpacing>  
      <Button type="submit">Criar novo quadro</Button>
      
    </StyledForm>
  )
}

newBoard.defaultProps = {
  onCreate: () => {}
}

export default newBoard