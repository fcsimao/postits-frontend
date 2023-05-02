import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styled from 'styled-components'
import axios from 'axios'
import Form from './form'

const { NEXT_PUBLIC_API_URL } = process.env

const StyledFormSpace = styled.div`
  display: flex;
  flex-direction: column;
`
function FormSpace ({ isloginPage }) {
  const router = useRouter()
  const [cookie, setCookie] = useCookies(['authorization'])
  const [formState, setFormState] = useState(isloginPage)
  const [error, setError] = useState()
  
  const handleLogin = async ({ email, password }) => {
    setError(false)
    try {
      const { data } = await axios.post(`${NEXT_PUBLIC_API_URL}/user`, {
        email, password 
      })
      handleAuth(data.authorization)
    } catch (err) {
      setError(true)
      console.error(err)
      console.error(err.message)
    }
  }
  
  const handleRegister = async ({ email, password, firstName, lastName }) => {
    setError(false)
    try {
      const { data } = await axios.post(`${NEXT_PUBLIC_API_URL}/user/create`, {
        email, password, firstName, lastName 
      })
      handleAuth(data.authorization)
    } catch (err) {
      setError(true)
      console.error(err)
      console.error(err.message)
    }
  }
const handleAuth = (token) => {
  setCookie('authorization', token)
  router.push('/')
}

  return (
    <StyledFormSpace>
      <Image src='/logo2.png' width='300' height='100' />
      {
        formState ?
          <Form
            onSubmit={handleLogin}
            submitButtonText='Entrar'
            linkText='Não possui conta? Clique aqui'
            onlinkClick={() => setFormState(false)}
            error={error}
          /> :
          <Form
            onSubmit={handleRegister}
            submitButtonText='Cadastrar'
            linkText='Já possui conta? Clique aqui'
            onlinkClick={() => setFormState(true)}
            isRegister
            error={error}
          />
      }
      
    </StyledFormSpace>
  )
}

export default FormSpace