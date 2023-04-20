import styled from'styled-components'

import Input from '../Inputs/input'
import Button from '../Buttons/button'

const StyledForm = styled.form`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`
const StyledText = styled.a`
  margin-top: 15px;
  font-size: 14px;
  color: ${({theme}) => theme.colors.white};
`
function LoginForm () {
  return (
    <StyledForm>
      <Input Type='email' placeholder='E-mail' required />
      <Input Type='password' placeholder='Senha' required />
      <Button type='submit'>Entrar</Button>
      <StyledText href='#'>Cadastre sua conta</StyledText>
    </StyledForm>
  )
}

export default LoginForm