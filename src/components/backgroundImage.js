import styled from "styled-components"


const StyledBackground = styled.div`
  position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;  
  height: 100vh;
  background-color ${({ theme }) => theme.colors.primary};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

function BackgroundImage ({ children }) {
  return (
    <StyledBackground>
      { children }
    </StyledBackground>
  )

}

export default BackgroundImage 
