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
 display: flex;
 gap: 1rem;
`


function NewBoard ({ onCreate }) {
  const [boardName, setBoardName] = useState('')
  const [boardAssunto, setBoardAssunto] = useState('')
  const handleSubmitNewForm = (e) => {
    e.preventDefault()
    onCreate(boardName, boardAssunto)
    setBoardName('')
    setBoardAssunto('')
  }
  return (
    <StyledForm onSubmit={handleSubmitNewForm}>
      <InputSpacing>
        <Input 
          type="text" 
          placeholder="Matéria" 
          required
          value={boardName}
          onChange={({ target }) => setBoardName(target.value)} 
        />
        <Input 
          type="text" 
          placeholder="Assunto" 
          required
          value={boardAssunto}
          onChange={({ target }) => setBoardAssunto(target.value)} 
        />
      </InputSpacing>  
      <Button type="submit">Criar novo Jogo</Button>
      
    </StyledForm>
  )
}

NewBoard.defaultProps = {
  onCreate: () => {}
}

export default NewBoard