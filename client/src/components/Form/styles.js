import { createTheme } from "@mui/system"

const theme = createTheme();

const styles ={
      paper: {
        padding: theme.spacing(2),
      },
      form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
      input:{
        margin: "10px"
      },
      fileInput: {
        width: '97%',
        margin: '10px 0',
      },
      buttonSubmit: {
        marginBottom: "10px",
      }
}

export default styles