import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const darkTheme = () => createTheme({
    palette: {
        primary: {
            main: '#282A35'
        },
        secondary: {
            main: '#282A35'
        },
        error: {
            main: red.A400
        }
    }
})