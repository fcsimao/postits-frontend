import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        primary: '#156EAC',
        secondary: '#6495ED',
        primaryHover: '#4e2375',
        light: '#F0F0F0',
        white: '#FFFFFF',
        grey: '#F8F8F8',
        inputBackground:'rgba(140, 140, 140, 0.5)',
        error: '#cc0000',
        cards: '#ffa600'
    }
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{ children }</ThemeProvider>
)

export default Theme