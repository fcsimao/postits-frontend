import { createGlobalStyle } from 'styled-components'
import Theme from '../src/Theme'

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.colors.light};
  }
`
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import localizeFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizeFormat)
dayjs.locale('pt-br')


export default function App ({ Component, pageProps }) {
    return (
      <Theme>
      <GlobalStyle />
      <Component { ...pageProps }  />
      </Theme>
    )
}
