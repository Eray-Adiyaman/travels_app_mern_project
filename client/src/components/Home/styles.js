import { createTheme } from "@mui/material"

const theme = createTheme();

const styles = {
    GridContainer:{
        // for mobile view this ensures search,create fields stays on top
        [theme.breakpoints.down("xs")]:{
            flexDirection: "column-reverse"
        }
    },
    AppBarSearch:{
        borderRadius: 4,
        marginBottom: "1rem",
        display : "flex",
        padding: "20px"
    },
    Autocomplete:{
        marginTop: "10px",
        border: "1px solid black",
        borderRadius: 1,
    },
    searchButton:{
        marginTop: "5px",
        padding: "10px",
    }
}

export default styles;